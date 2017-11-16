import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { addProdInOrder, removeProdInOrder } from './actions';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';

interface AppProps {
	title: string;
	addCard: () => void;
	removeCard: () => void;
}
class App extends React.Component <AppProps>{
	render(){
		return (
			<Router>
				<div>
					<Header title={this.props.title}/>
					<Switch>
						<Route exact={true} path="/" component={Home} />
						<Route path="/catalog" component={Catalog} />
					</Switch>
				</div>
			</Router>
		);
	}
}
export default connect(
	state => ({
		title: 'hey'
	}),
	dispatch => ({
		addCard: id => dispatch(addProdInOrder(id)),
		removeCard: id => dispatch(addProdInOrder(id))
	})
)(App);