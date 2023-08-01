import React from 'react';
import './Chosen.scss';
import ChosenArray from './chosen-data';

const Chosen = ({lang}) => {
  return (
    <div className='chosen-container'>
     <h2>{lang.chosenTitle}</h2>
     <div className='chosen-boxes'>
       {lang.OurChosen.map((item,index)=>(
        <div className='chosen-box' key={index}>
         <div className='title-image'>
            <img src={item.img} alt={item.title} />
            <h5>{item.title}</h5>
         </div>
         <div className="text">
            <p>{item.text}</p>
         </div>
        </div>
       ))}
     </div>
    </div>
  )
}

export default Chosen