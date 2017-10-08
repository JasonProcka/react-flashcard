import React, { Component } from 'react'
import Radium from 'radium'

class CardList extends Component {
	render() {
		return (
			<div>
				<h3>Cards in list</h3>
				{ this.props.cards.map((card, i) => 
					<li key={card.id.toString()}>{card.word} : {card.match}</li>
				) }
			</div>
		)
	}
}

CardList = Radium(CardList)

export default CardList