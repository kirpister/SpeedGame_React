import React, { Component } from 'react';
import Circle from './Circle';
import GameOver from './GameOver';
import './App.css';
import click from './sounds/Sound2.mp3';
import music from './sounds/bass-sounds.mp3';
import stop from './sounds/vinyl-scratch2.mp3';

let clickSound = new Audio(click);
let bgSound = new Audio(music);
let stopSound = new Audio(stop);

const getRandomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {

  state = {
    score: 0,
    circles: [1, 2, 3, 4],
    current: undefined,
    pace: 1000,
    rounds: 0,
    gameOver: false,
    gameOn: false,
  } 

  timer = undefined;

  clickPlay = () => {
    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.currentTime();
    }
  };

  clickHandler = (i) => {

    this.clickPlay();

    if (this.state.current !== i) {
      this.stopGame();
      return;
    }

    this.setState({ 
      score: this.state.score + 3,
      rounds: this.state.rounds -1,
     });
    
  };

  nextCircle = () => {

    if (this.state.rounds >= 3) {
      this.stopGame();
      return;
    }

    let nextActive;

    do {
      nextActive = getRandomNum(0, this.state.circles.length - 1);
    } while (nextActive === this.state.current);

    this.setState({ 
      current: nextActive, 
      pace: this.state.pace * 0.95, 
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
  };

  startGame = () => {

    bgSound.play();

    this.nextCircle();
    this.setState({ gameOn: !this.state.gameOn });
    
  };

  stopGame = () => {
    bgSound.pause();
    stopSound.play();

    clearTimeout(this.timer);
    
    this.setState({ gameOver: true, });
  };

  closeModal = () => {
    // this.setState({
    //   gameOver: !this.state.gameOver,
    // })
    window.location.reload();
  };

  render() {
    
    return (
      <div>
        <h1>SPEEDGAME!</h1>
        <h3>Your score is - {this.state.score}</h3>

        <div className='gamearea'>
         {this.state.circles.map((circle, i) =>
           <Circle key={i} id={i + 1} 
           gameStatus={this.state.gameOn}
           click={() => this.clickHandler(i)} 
           active={this.state.current === i}/>
           )};
        </div>


        <div className='btns-grid'>

        <button className='btn-1' onClick={this.stopGame}>STOP</button>
        <button className='btn-2' onClick={this.startGame}>START</button>

        </div>

        {this.state.gameOver && 
          <GameOver 
        closeModal={this.closeModal}
        score={this.state.score}/>}

      </div>
    );
  }
}

export default App;




// state, handler, pass to component
