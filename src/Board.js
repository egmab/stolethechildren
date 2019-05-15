
import React, { Component } from 'react';
import './Game.css';
import bebe from './assets/img/bebe2.gif'
import bebe2 from './assets/img/bebe touché.gif'
import Score from './composants/Score';
import Timer from './composants/Timer';
import EggsValue from './EggsValue';
import Baby from './Baby';
import { Container, Row, Col } from 'reactstrap';


class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noNemesis: true,
      score: 0,
      pointer: 0,
      pointer2: 0,
      pointer3: 0,
      pointer4: 0,
      pointer5: 0,
      pointer6: 0,
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
      ],
      imgs5: [
        bebe,
        bebe2,
      ],
      imgs6: [
        bebe,
        bebe2,
      ]
    };
  }


  getScore = (newScore, id) => {
    if (id === "egg1") {
      this.setState({
        score: this.state.score + newScore,
        pointer: 1,
      });
      setTimeout(() => {
        this.setState({ pointer: 0 });
      }, 800);
    }
    if (id === "egg2") {
      this.setState({
        score: this.state.score + newScore,
        pointer2: 1,
      });
      setTimeout(() => {
        this.setState({ pointer2: 0 });
      }, 800);
    }
    if (id === "egg3") {
      this.setState({
        score: this.state.score + newScore,
        pointer3: 1,
      });
      setTimeout(() => {
        this.setState({ pointer3: 0 });
      }, 800);
    }
    if (id === "egg4") {
      this.setState({
        score: this.state.score + newScore,
        pointer4: 1,
      });
      setTimeout(() => {
        this.setState({ pointer4: 0 });
      }, 800);
    }
    if (id === "egg5") {
      this.setState({
        score: this.state.score + newScore,
        pointer5: 1,
      });
      setTimeout(() => {
        this.setState({ pointer5: 0 });
      }, 800);
    }
    if (id === "egg6") {
      this.setState({
        score: this.state.score + newScore,
        pointer6: 1,
      });
      setTimeout(() => {
        this.setState({ pointer6: 0 });
      }, 800);
    }
  }
  extraScore = (extrascore) => {
    this.setState({
      score: this.state.score + extrascore,
      noNemesis: false,
    });
  }

  render() {
    const { pointer, pointer2, pointer3, pointer4, pointer5, pointer6, imgs, imgs2, imgs3, imgs4, imgs5, imgs6 } = this.state;
    let image;
    let nemesis;
    let extrascore;
    const styles = {
      grid: {
        paddingLeft: 0,
        paddingRight: 0
      },
      row: {
        marginLeft: 0,
        marginRight: 0
      },
      col: {
        paddingLeft: 0,
        paddingRight: 0
      }
    };
    switch (this.props.char) {
      case 'burns':
        image = "./burns.png";
        nemesis = "./homer.gif";
        extrascore = 101;
        break;
      case 'voldemort':
        image = "./voldemort.jpg";
        nemesis = "./harry.gif";
        extrascore = 65;
        break;
      case 'witch':
        image = "./reine.png";
        nemesis = "./neige.gif";
        extrascore = 14;
        break;
      default:
        break;
    }
    return (
      <div className="board">
        <Container fluid style={styles.grid}>
          <Row style={styles.row}>
            <div id='timereteggs'>
              <div id='timerContainer'>
                <div id='scoreC'>
                  <img src={image} className="char" alt="char" />
                  <div className="barreScore">
                  <Timer score={this.state.score} />
                  <Score newScore={this.state.score} />
                  </div>
                </div>
              </div>
              <div id='eggsContainer'>
                <EggsValue />
              </div>
            </div>
          </Row>
          <Row className="babyRow" style={styles.row}>
            <Col xs={12} style={styles.col}>
              {this.state.score > 30 && this.state.noNemesis ? <div className="nemesis" onClick={() => this.extraScore(extrascore)}><img src={nemesis} className="nemesis" alt="nemesis" /></div> : <div className="noNemesis"></div>}
            </Col>
            <Col xs={12} style={styles.col}>
              <div className="bebel1">
                <Baby sens="left" idegg="egg1" img={imgs[pointer]} score={this.getScore} />
              </div>
              <div className="bebe1">
                <Baby sens="right" idegg="egg2" img={imgs2[pointer2]} score={this.getScore} />
              </div>
            </Col>
            <Col xs={12} style={styles.col}>
              <div className="bebel2">
                <Baby sens="left" idegg="egg3" img={imgs3[pointer3]} score={this.getScore} />
              </div>
              <div className="bebe2">
                <Baby sens="right" idegg="egg4" img={imgs4[pointer4]} score={this.getScore} />
              </div>
            </Col>
            <Col xs={12} style={styles.col}>
              <div className="bebel3">
                <Baby sens="left" idegg="egg5" img={imgs5[pointer5]} score={this.getScore} />
              </div>
              <div className="bebe3">
                <Baby sens="right" idegg="egg6" img={imgs6[pointer6]} score={this.getScore} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

}
export default Board;
