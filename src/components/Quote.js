import React from 'react';

export class Quote extends React.Component {
	render() {
		return (
			<div id='quote-wrap'>
				<p id='text'>{this.props.text}</p>
				<p id='author'>{this.props.author}</p>
			</div>
		);
	}
}
