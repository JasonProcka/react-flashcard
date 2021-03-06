import React, { Component } from 'react'
import Radium from 'radium'

class Shuffle extends Component {
	render() {
		return ( 
			<div style={mainStyles.container}>
				<a onClick={this.props.shuffleCards} role="button" style={shuffleStyles}>Shuffle</a>
			</div>
		)
	}
}

Shuffle = Radium(Shuffle)

var mainStyles = {
	container: {
		display: 'inline-block'
	}
}

var shuffleStyles = {
	padding: '10px 14px',
	color: 'white',
	textDecoration: 'none',
	backgroundColor: '#2ecc71',
	borderRadius: 4,
	':hover': {
		cursor: 'pointer'
	},
	display: 'inline-block',
	boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12)'
}

export default Shuffle