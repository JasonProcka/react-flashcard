import React, { Component } from 'react'
import Radium from 'radium'

class Flashcard extends Component {
	render() {
		return (
			<div className="Flashcard" style={flashcardStyles.outer}>
				<div className="Flashcard-inner" style={flashcardStyles.inner}>
					<h3 style={flashcardStyles.cardLabel}>{this.props.word}</h3>
					<h3 style={flashcardStyles.cardLabel}>{this.props.match}</h3>
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
		boxShadow: '0 4px 3px rgba(0,0,0,0.2)',
		display: 'table',
		padding: '20px',
		margin: 'auto'
	},
	inner: {
		display: 'table-cell',
		verticalAlign: 'middle',
		textAlign: 'center'
	},
	cardLabel: {
		margin: 0
	}
}

export default Flashcard