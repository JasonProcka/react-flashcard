import React, { Component } from 'react'
import Radium from 'radium'
// firebase
import firebase from 'firebase/app'
import 'firebase/database'
import { FB_CONFIG } from './config/fb_config'
// components
import Flashcard from './components/Flashcard'
import Shuffle from './components/Shuffle'

class App extends Component {
  constructor(props) {
    super(props)

    // firebase
    this.app = firebase.initializeApp(FB_CONFIG) // configuring our firebase app
    this.database = this.app.database() // grabbing our database
    this.flashcards = this.database.ref().child('cards') // grabbing our cards

    // function bindings
    this.drawRandomCard = this.drawRandomCard.bind(this)
    this.shuffleCards = this.shuffleCards.bind(this)

    this.state = {
      cards: [],
      currentCard: {}
    }
  }

  componentDidMount() {

    const currentCards = this.state.cards

    this.flashcards.on('child_added', snap => {
      currentCards.push({
        id: snap.key,
        word: snap.val().word,
        match: snap.val().match
      })
    })

    // Pushing to firebase

    // var flashcardPush = this.flashcards.push()
    // var flashcardKey = flashcardPush.key

    // var genCard = { // Our new card being pushed
    //   id: flashcardKey,
    //   word: 'word92873',
    //   match: 'match29373'
    // }

    // this.flashcards.push(genCard)

    console.log('currentCards before state:', currentCards)

    this.setState({
      cards: currentCards,
      currentCard: this.drawRandomCard(currentCards)
    })
  }

  drawRandomCard(currentCards) {
    console.log('drawRandomCard(currentCards): ', currentCards) // returns the currentCards array of objects properly

    console.log('currentCards.length:', currentCards.length)

    console.log('index of currentCards:', currentCards[0]) // attempting to index the array... doesn't work period 'undefined'

    const randomCard = currentCards[Math.floor(Math.random() * (currentCards.length))] // where the error persists

    console.log(Math.floor(Math.random() * (currentCards.length))) // just to see what we get... 0

    console.log('randomCard', randomCard) // logs randomCard as 'undefined'

    return randomCard
  }

  shuffleCards() {
    const newCard = this.drawRandomCard(this.state.cards) 

    if (newCard === this.state.currentCard) { // prevent repeat cards
      this.shuffleCards()
    } else {
      this.setState({ currentCard: newCard })
    }

  }

  render() {
    return (
      <div className="App" style={appStyles.flashcard}>
        <div className="cardTable" style={appStyles.table}>
          <Flashcard />
          <div className="button-container" style={buttonStyles.container}>
            <Shuffle shuffleCards={this.shuffleCards} style={buttonStyles.shuffleCards}/>
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
    margin: '60px'
  },
  cardTable: {
    
  }
}

var buttonStyles = {
  container: {
    textAlign: 'left',
    marginTop: 30,
    fontWeight: 400,
    WebkitFontSmoothing: 'antialiased'
  },
  createCard: {
    marginRight: 10
  },
  shuffleCards: {
    
  }
}

export default App
