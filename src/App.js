import React, { Component } from 'react';
import Nav from "./components/Nav/Nav";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Cards/Cards";
import cards from "./cards.json";
import Col from "./components/Col/Col";
import Row from "./components/Row/Row";
import './App.css';

class App extends Component {
  state = {
    cards,
    topScore: 0,
    currentScore: 0,
    selectedArray: []
  };

  hasBeenChosen = id => {
    if(this.state.selectedArray.indexOf(id) === -1) {
      this.state.selectedArray.push(id);
      this.setState({currentScore: this.state.currentScore + 1})
      this.handleScore();
      this.winGame();
      this.shuffle(this.state.cards);
    }
    else {
      alert("you got it wrong!");
      this.setState({
        selectedArray: [],
        currentScore: 0
      });
      this.shuffle(this.state.cards);
    }
  }
  
  handleScore = () => {
    if(this.state.topScore <= this.state.currentScore) {
      this.setState({topScore: this.state.topScore + 1});
    }
  }

  winGame = () => {
    console.log(this.state.currentScore);
    if(this.state.currentScore === 11) {
      alert("you WON!!!");
      this.setState({
        selectedArray: [],
        currentScore: 0
      });
    }
  }

  shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  render() {
    return (
      <Wrapper>
        <Nav
          currentScore = {this.state.currentScore}
          topScore = {this.state.topScore}
        />
        <Title />
        <div className="container">
          <Row>
          {this.state.cards.map(card => (
            <Col size="md-3">
            <Card
              key = {card.id}
              id = {card.id}
              name = {card.name}
              image = {card.image}
              selectCard = {this.hasBeenChosen}
            />
            </Col>
          ))}
          </Row>
        </div>
      </Wrapper>
    )
  }
}

export default App;
