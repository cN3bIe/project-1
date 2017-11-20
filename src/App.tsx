import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';

interface AppProps {
	title: string;
}
export default class App extends React.Component<AppProps>{
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
};