
import React, { Component } from 'react';
import './Game.css';
import bebe from './assets/img/bebe2.gif'
import bebe2 from './assets/img/bebe touché.gif'
import Egg from './Egg';
import Score from './composants/Score';
import Timer from './composants/Timer';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      score: 0,
      pointer: 0,
      pointer2: 0,
      pointer3: 0,
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
      ]
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick() {
    const { length } = this.state.imgs;
    const { pointer } = this.state;
    const newPointer = pointer === length - 1 ? 0 : pointer + 1;
    this.setState({ pointer: newPointer });
  }

  handleClick2() {
    const { length } = this.state.imgs2;
    const { pointer2 } = this.state;
    const newPointer = pointer2 === length - 1 ? 0 : pointer2 + 1;
    this.setState({ pointer2: newPointer });
  }

  handleClick3() {
    const { length } = this.state.imgs3;
    const { pointer3 } = this.state;
    const newPointer = pointer3 === length - 1 ? 0 : pointer3 + 1;
    this.setState({ pointer3: newPointer });
  }
  getScore = (newScore) => {
    this.setState({ score: this.state.score + newScore });
  }

  render() {
    const { pointer, pointer2, pointer3, imgs, imgs2, imgs3 } = this.state;

    return (
      <div className="board">
        <Timer score={this.state.score} />
        <img className="bebe" src={imgs[pointer]} onClick={this.handleClick} alt="bebe" />
        <img className="bebe2" src={imgs2[pointer2]} onClick={this.handleClick2} alt="bebe2" />
        <img className="bebe3" src={imgs3[pointer3]} onClick={this.handleClick3} alt="bebe3" />
        <Egg score={this.getScore} />
        <Egg score={this.getScore} />
        <Score newScore={this.state.score} />

      </div>
    );
  }

}
export default Board;
