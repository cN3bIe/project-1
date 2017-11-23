import * as React from 'react';

import './style.sass';

interface CardProps extends Prod {
	// addProdInOrder: () => void;
}

export default class Card extends React.Component<CardProps> {
	render(){
		// console.log(styles);
		return (
			<div className="card" id={this.props.id as string}>
				<div className="name">Название: {this.props.name}</div>
				<div className="price">Цена: {this.props.price}</div>
				<button className="btn">Добавить в корзину</button>
			</div>
		);
	}
}