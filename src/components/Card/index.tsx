import * as React from 'react';

import './style.sass';
import Button from './ButtonSwitch';

interface CardProps extends Prod {
	isOnCard: boolean;
	addProdInCard: (id: ProdId) => void;
	removeProdInCard: (id: ProdId) => void;
}

export default class Card extends React.Component<CardProps> {
	constructor(props: CardProps){
		super(props);
		this.handleAddProdInCard = this.handleAddProdInCard.bind(this);
		this.handleRemoveProdInCard = this.handleRemoveProdInCard.bind(this);
	}
	handleAddProdInCard(){
		this.props.addProdInCard(this.props.id);
	}
	handleRemoveProdInCard(){
		this.props.removeProdInCard(this.props.id);
	}
	render(){
		return (
			<div className="card" id={this.props.id as string}>
				<div className="name">Название: {this.props.name}</div>
				<div className="price">Цена: {this.props.price}</div>
				<Button
					isOnCard = {this.props.isOnCard}
					handleAddProdInCard = {this.handleAddProdInCard}
					handleRemoveProdInCard={this.handleRemoveProdInCard}
				/>
			</div>
		);
	}
}