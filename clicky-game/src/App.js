import React, { Component } from 'react';
import Nav from "./components/Nav/Nav";
import Title from "./components/Title/Title";
import Wrapper from "./components/Wrapper/Wrapper";
import Card from "./components/Cards/Cards";
import cards from "./cards.json";
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
    }
    else {
      alert("you got it wrong!");
      this.setState({
        selectedArray: [],
        currentScore: 0
      });
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

  render() {
    return (
      <Wrapper>
        <Nav
          currentScore = {this.state.currentScore}
          topScore = {this.state.topScore}
        />
        <Title />
        {this.state.cards.map(card => (
          <Card
            key = {card.id}
            id = {card.id}
            name = {card.name}
            image = {card.image}
            selectCard = {this.hasBeenChosen}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
