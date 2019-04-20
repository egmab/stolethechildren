
import React, { Component } from 'react';
import './Game.css';
import bebe from './assets/img/bebe2.gif'
import bebe2 from './assets/img/bebe touché.gif'
import Egg from './Egg';
import Score from './composants/Score';
import Timer from './composants/Timer';
import EggsValue from './EggsValue'

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noNemesis : true,
      hasEgg : false,
      gain: 0,
      score: 0,
      pointer: 0,
      pointer2: 0,
      pointer3: 0,
      pointer4: 0,
      imgs: [
        bebe,
        bebe2,
      ],
      imgs2: [
        bebe,
        bebe2,
      ],
      imgs3: [
        bebe,
        bebe2,
      ],
      imgs4: [
        bebe,
        bebe2,
      ]
    };
  }


  getScore = (newScore, id) => {
    if (id === "egg1") {
      this.setState({
        score: this.state.score + newScore,
        gain : newScore,
        hasEgg : true,
        pointer: 1,
      });
      setTimeout(() => {
        this.setState({ pointer: 0 });
      }, 800);
    }
    if (id === "egg2") {
      this.setState({
        score: this.state.score + newScore,
        gain : newScore,
        hasEgg : true,
        pointer2: 1,
      });
      setTimeout(() => {
        this.setState({ pointer2: 0 });
      }, 800);
    }
    if (id === "egg3") {
      this.setState({
        score: this.state.score + newScore,
        gain : newScore,
        hasEgg : true,
        pointer3: 1,
      });
      setTimeout(() => {
        this.setState({ pointer3: 0 });
      }, 800);
    }
    if (id === "egg4") {
        this.setState({
          score: this.state.score + newScore,
          gain : newScore,
          hasEgg : true,
          pointer4: 1,
        });
        setTimeout(() => {
          this.setState({ pointer4: 0 });
        }, 800);
      }
  }
  extraScore = (extrascore) =>{
    this.setState({
      score: this.state.score + extrascore,
      noNemesis : false,
    });
  }

  render() {
    const { pointer, pointer2, pointer3, pointer4, imgs, imgs2, imgs3, imgs4 } = this.state;
    let image;
    let nemesis;
    let extrascore;
    switch (this.props.char) {
      case 'burns':
          image = "./burns.png";
          nemesis = "./smither.png";
          extrascore = 101;
          break;
      case 'voldemort':
          image = "./voldemort.jpg";
          nemesis = "./harry.png";
          extrascore = 65;
          break;
      case 'witch':
          image = "./reine.png";
          nemesis = "./neige.png";
          extrascore = 14;
          break;
      default:
          break;
  }
    return (
      <div className="board">
        
        <div id='timereteggs'>
          <div id='timerContainer'>
            <Timer score={this.state.score} />
            <div id='scoreC'>
            <img src={image} className="char" alt="char"/>
            <Score newScore={this.state.score} />
            </div>
          </div>
          <div id='eggsContainer'>
            <EggsValue />
          </div>
        </div>
        {this.state.score > 30 && this.state.noNemesis ? <div className="nemesis" onClick={() => this.extraScore(extrascore)}><img src={nemesis} className="nemesis" alt="nemesis"/></div> : undefined}
        <div className="bebe">
          <img src={imgs[pointer]} alt="bebe" />
          <Egg id="egg1" score={this.getScore} />
        </div>
        <div className="bebe2">
          <img src={imgs2[pointer2]} alt="bebe2" />
          <Egg id="egg2" score={this.getScore} />
        </div>
        <div className="bebe3">
          <img src={imgs3[pointer3]} alt="bebe3" />
          <Egg id="egg3" score={this.getScore} />
        </div>
        <div className="bebe4">
          <img src={imgs4[pointer4]} alt="bebe3" />
          <Egg id="egg4" score={this.getScore} />
        </div>
      </div>
    );
  }

}
export default Board;
