import React, { Component } from 'react'
import Radium from 'radium'

class Flashcard extends Component {
	render() {
		return (
			<div className="Flashcard" style={flashcardStyles.outer}>
				<div className="Flashcard-inner" style={flashcardStyles.inner}>
					<h3 style={flashcardStyles.cardLabel}>{this.props.word} : {this.props.match}</h3>
				</div>
			</div>
		)
	}
}

Flashcard = Radium(Flashcard)

var flashcardStyles = {
	outer: {
		width: 500,
		height: 300,
		backgroundColor: '#FFF',
		boxShadow: '0 4px 3px rgba(0,0,0,0.2)'
	},
	inner: {
		width: '100%',
		height: '100%',
		position: 'relative',
		textAlign: 'center'
	},
	cardLabel: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'relative',
		margin: 0
	}
}

export default Flashcard