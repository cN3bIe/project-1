import * as React from 'react';

interface ButtonProps {
	isOnCard: boolean;
	handleAddProdInCard: () => void;
	handleRemoveProdInCard: () => void;
}

interface ButtonState {
	isOnCard: boolean;
}

export default class Button extends React.Component <ButtonProps,ButtonState> {
	constructor( props: ButtonProps ){
		super( props );
		this.state = {
			isOnCard: props.isOnCard
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		if( this.state.isOnCard ) this.props.handleAddProdInCard();
		else this.props.handleRemoveProdInCard();
		this.setState( prevState => ({
			isOnCard: !prevState.isOnCard
		}) );
	}
	render(){
		return <button
			className="btn"
			onClick={this.handleClick}
		>{this.state.isOnCard?'Добавить в корзину':'Убарть из корзины'}</button>;
	}
}