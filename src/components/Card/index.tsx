import * as React from 'react';

import * as styles from './style.css';

console.log(styles.select, styles.loading);

interface CardProps extends Prod {
	// addProdInOrder: () => void;
}

export default class Card extends React.Component<CardProps> {
	render(){
		return (
			<div className="card" id="{this.props.id}">
				<div className="name">Название: {this.props.name}</div>
				<div className="price">Цена: {this.props.price}</div>
				<button className="btn">Добавить в корзину</button>
			</div>
		);
	}
}