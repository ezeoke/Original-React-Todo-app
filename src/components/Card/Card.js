import React from 'react';
import './Card.css';  

const Card = (props) => {
 return (
   <div>
     <ul className='card'>
    {props.individualItems.map((item)=><li>{item}</li>)} 
     </ul>
   </div>
 )
}

export default Card;