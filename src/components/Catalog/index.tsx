import * as React from 'react';


import { connect } from 'react-redux';
import { addProdInOrder, removeProdInOrder } from '../../actions';
import Card from '../Card';

interface CatalogProps {
	title: string;
	prod: Prod[];
	// addCard: () => void;
	// removeCard: () => void;
}

class Catalog extends React.Component <CatalogProps>{
	render(){
		return (
			<div>
				<h1>Catalog {this.props.title}</h1>
				<div>{this.props.prod.map( (prod: Prod) => <Card key={prod.id} {...prod} /> )}</div>
			</div>
		);
	}
}
export default connect(
	(state: MagazinState) => ({
		title: 'hey',
		prod: state.prod
	}),
	dispatch => ({
		// addCard: id => dispatch(addProdInOrder(id)),
		// removeCard: id => dispatch(addProdInOrder(id))
	})
)(Catalog);