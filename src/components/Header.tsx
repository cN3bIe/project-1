import * as React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
	title: string;
}
export default class Header extends React.Component<HeaderProps> {
	render(){
		return (
			<header>
				<h1>{this.props.title}</h1>
				<nav>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/catalog">Catalog</Link></li>
					</ul>
				</nav>
			</header>
		);
	}
}