import * as React from 'react';


import { connect } from 'react-redux';
import { addProdInOrder, removeProdInOrder } from '../actions';

interface CatalogProps {
	title: string;
	// addCard: () => void;
	// removeCard: () => void;
}

class Catalog extends React.Component <CatalogProps>{
	render(){
		return <h1>Catalog {this.props.title}</h1>;
	}
}
export default connect(
	state => ({
		title: 'hey'
	}),
	dispatch => ({
		// addCard: id => dispatch(addProdInOrder(id)),
		// removeCard: id => dispatch(addProdInOrder(id))
	})
)(Catalog);