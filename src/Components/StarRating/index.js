import React, { useState } from 'react'
import {FaStar} from '@react-icons/all-files/fa/FaStar'
import '../StarRating/index.css';

const StarRating = ({noofstar=5}) => {
    const [rating, setRating] =useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div className="star-rating">
        {[...Array(noofstar)].map((_,index)=>{
            index+=1;
            return(
            <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
             key={index}
             onClick={() => handleClick(index)}
             onMouseMove={() => handleMouseEnter(index)}
             onMouseLeave={() => handleMouseLeave()}/>);
})}
        

    </div>
  )
}

export default StarRating;