import * as React from 'react';


interface MoreProps {
	title: string;
	moreProd: () => any;
}
export default class More extends React.Component<MoreProps> {
	render(){
		return (
			<div>
				<button className="btn" onClick={this.props.moreProd} >{this.props.title}</button>
			</div>
		);
	}
}