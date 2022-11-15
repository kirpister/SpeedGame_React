import React from 'react';
import './App.css';

const GameOver = (props) => {

    let message = '';

    if (props.score <= 10) {
        message = "Nooo, more records!!!";
    } else if (props.score <= 25) {
        message = "Okay okay, that's a decent haul..";
    } else if (props.score > 25) {
        message = "NICE!";
    }

    return (
        <div className="overlay">
        <div className="modal">
            <h2>GAME OVER!!</h2>
            <h3><span> {props.score}</span> Records collected! </h3>
            <p>{message}</p>

            <button className='close-btn' onClick={props.closeModal}>TRY AGAIN?</button>

        </div>
        </div>
    );
};

export default GameOver;