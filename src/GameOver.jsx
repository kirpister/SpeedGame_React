import React from 'react';
import './App.css';

const GameOver = (props) => {
    return (
        
        <div className="overlay">
        <div className="modal">
            <h2>GAME OVER!!</h2>
            <h3>Your score was - <span> {props.score} </span> </h3>

            <button className='close-btn' onClick={props.closeModal}>TRY AGAIN?</button>

        </div>
        </div>
    );
};

export default GameOver;