import {motion, AnimatePresence} from 'framer-motion'
import Feedback from "./Feedback";
import PropTypes from 'prop-types';
function List({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet!</p>
    }
  return (
    <div className="feedback-list">
      <AnimatePresence>
      {feedback.map((item) => (
            <motion.div 
              key={item.id}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
            >
               <Feedback key={item.id} 
            item={item} 
            handleDelete={handleDelete}/>
            </motion.div> 
        ))}
      </AnimatePresence>
        
    </div>
  )
}

List.propTypes = {
  feedback: PropTypes.arrayOf({
    id:PropTypes.number.isRequired,
    text:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,

  })
}

export default List
