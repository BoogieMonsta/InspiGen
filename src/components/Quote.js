import React from 'react';

export const Quote = props => {
	return (
		<div id='quote-wrap'>
			<p id='text'>{props.text}</p>
			<p id='author'>{props.author}</p>
		</div>
	);
};
