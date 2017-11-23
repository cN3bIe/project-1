import * as React from 'react';


import { connect } from 'react-redux';
import { actionsAddProdInCard, actionsRemoveProdInCard } from '../../actions';
import Card from '../Card';

interface CatalogProps {
	title: string;
	prod: Prod[];
	card: ProdId[];
	addProdInCard: ( id: ProdId ) => any;
	removeProdInCard: ( id: ProdId ) => any;
}

class Catalog extends React.Component <CatalogProps>{
	render(){
		return (
			<div>
				<h1>Catalog {this.props.title}</h1>
				<div className="wr-card">{this.props.prod.map(
					(prod: Prod) =>
					<Card
						key={prod.id}
						{...prod}
						isOnCard={!this.props.card.some( (id: ProdId) => id === prod.id )}
						addProdInCard={this.props.addProdInCard}
						removeProdInCard={this.props.removeProdInCard}
					/> )}</div>
			</div>
		);
	}
}
export default connect(
	(state: MagazinState) => ({
		title: 'hey',
		prod: state.prod,
		card: state.card
	}),
	dispatch => ({
		addProdInCard: ( id: ProdId ) => dispatch(actionsAddProdInCard(id)),
		removeProdInCard: ( id: ProdId ) => dispatch(actionsRemoveProdInCard(id))
	})
)(Catalog);