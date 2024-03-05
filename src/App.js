import { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import FeedbackData from "./data/FeebackData";
import List from "./components/List";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AboutIconLink from "./components/AboutIconLink";
function App() {
    const [feedback,setFeedback] = useState(FeedbackData)
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    return(
        <Router>
            <>
            <Header />
            <div className="container">
                <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedbackForm handleAdd = {addFeedback}/>
                     <FeedbackStats feedback={feedback}/>
                     <List feedback={feedback} handleDelete={deleteFeedback} />
                    </>
                }>
                     
                </Route>

                <Route path='/about' element={<AboutPage />}/>
                </Routes>
                
               
                <AboutIconLink />
               
            </div>
        </>
        </Router>
        
        
    )
}

export default App;