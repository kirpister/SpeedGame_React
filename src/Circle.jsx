import React from 'react';
import './Circle.css';

const Circle = (props) => {
    return (
        
        <div className={`circle ${props.active ? 'active' : ''}`}

        onClick={props.gameStatus ? props.click : null}> 
      
        </div>
       
    )
};

export default Circle;