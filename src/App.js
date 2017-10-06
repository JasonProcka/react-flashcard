import React, { Component } from 'react'
import Radium from 'radium'
// components
import Flashcard from './components/Flashcard'
import Shuffle from './components/Shuffle'

class App extends Component {
  constructor(props) {
    super(props)

    this.drawRandomCard = this.shuffleCards.bind(this)
    this.shuffleCards = this.shuffleCards.bind(this)

    this.state = {
      cards: [
        {id: 1, word: 'Word 1', match: 'Match 1'},
        {id: 2, word: 'Word 2', match: 'Match 2'},
        {id: 3, word: 'Word 3', match: 'Match 3'},
        {id: 4, word: 'Word 4', match: 'Match 4'},
        {id: 5, word: 'Word 5', match: 'Match 5'},
        {id: 6, word: 'Word 6', match: 'Match 6'}
      ],
      currentCard: {}
    }
  }

  componentDidMount() {
    const currentCards = this.state.cards

    this.setState({
      cards: currentCards,
      currentCard: this.drawRandomCard(currentCards)
    })
  }

  drawRandomCard(currentCards) {
    console.log('hey')
    const randomCard = currentCards[Math.floor(Math.random() * currentCards.length)]
    return randomCard
  }

  shuffleCards() {
    this.setState({ currentCard: this.drawRandomCard(this.state.cards) }) 
  }

  render() {
    return (
      <div className="App" style={appStyles.flashcard}>
        <div className="cardTable" style={appStyles.table}>
          <Flashcard word={this.state.currentCard.word} match={this.state.currentCard.match} />
          <div className="shuffle-container" style={shuffleStyles.container}>
            <Shuffle shuffleCards={this.shuffleCards} />
          </div>
        </div>
      </div>
    )
  }
}

App = Radium(App)

// Styling

var appStyles = {
  flashcard: {
    color: 'black',
    fontFamily: 'sans-serif',
    marginTop: 220
  },
  cardTable: {
    marginTop: '220px'
  }
}

var shuffleStyles = {
  container: {
    textAlign: 'center',
    marginTop: 50
  }
}

export default App