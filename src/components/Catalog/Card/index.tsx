import * as React from 'react';

import './style.sass';
import Button from './ButtonSwitch';

interface CardProps extends Prod {
	isOnCard: boolean;
	addProdInCard: (id: ProdId) => void;
	removeProdInCard: (id: ProdId) => void;
}

export default function Card( props: CardProps ) {
	return (
		<div className="card" id={props.id as string}>
			<div className="name">Название: {props.name}</div>
			<div className="price">Цена: {props.price}</div>
			<Button
				isOnCard = {props.isOnCard}
				handleAddProdInCard = { ()=> props.addProdInCard(props.id) }
				handleRemoveProdInCard={ ()=> props.removeProdInCard(props.id) }
			/>
		</div>
	);
}