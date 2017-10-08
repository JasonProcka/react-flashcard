import React, { Component } from 'react'
import Radium from 'radium'

class CreateCard extends Component {
	render() {
		return (
			<div style={mainStyles.container}>
				<a onClick={this.props.shuffleCards} role="button" style={createStyles}>Create</a>
			</div>
		)
	}
}

CreateCard = Radium(CreateCard)

var mainStyles = {
	container: {
		display: 'inline-block',
		marginRight: 10
	}
}

var createStyles = {
	padding: '10px 14px',
	color: 'white',
	textDecoration: 'none',
	backgroundColor: '#3498db',
	borderRadius: 4,
	':hover': {
		cursor: 'pointer'
	},
	display: 'inline-block',
	boxShadow: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.12)'
}

export default CreateCard