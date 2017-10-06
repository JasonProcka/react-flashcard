import React, { Component } from 'react'
import Radium from 'radium'

class Shuffle extends Component {
	render() {
		return ( <a onClick={this.props.shuffleCards} role="button" style={shuffleStyles}>Shuffle</a> )
	}
}

Shuffle = Radium(Shuffle)

var shuffleStyles = {
	padding: '10px 14px',
	color: 'white',
	textDecoration: 'none',
	backgroundColor: '#2ecc71',
	borderRadius: 4,
	':hover': {
		cursor: 'pointer'
	},
	block: {
		display: 'block'
	}
}

export default Shuffle