import React, { useState } from 'react';
import {quotes} from '../assets/Quotes.js';
import { Icon } from '@iconify/react';
import { Quote } from './Quote.js';

const twitterJoke =
	'https://twitter.com/intent/tweet?text=Just%20caught%20myself%20about%20to%20tweet%20an%20inspiring%20quote...%20I%20need%20a%20break,%20fr%20fr';

export class QuoteBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: Math.floor(Math.random() * quotes.length),
			image: '',
		};
		this.nextQuote = this.nextQuote.bind(this);
		// this.handleMouseEnter = this.handleMouseEnter.bind(this);
		// this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
	// const [display, setDisplay] = useState('hidden');
	// const handleMouseEnter = () => {
	//   console.log('we in here');
	// 	setDisplay('visible');
	// };
	// const handleMouseLeave = () => {
	//   console.log('we outta here');
	// 	setDisplay('hidden');
	// };
	nextQuote = () => {
		this.setState(() => ({
			index: Math.floor(Math.random() * quotes.length),
		}));
	};
	render() {
		const index = this.state.index;
		// const showButtons = this.state.showButtons;
		// const styleButtons = showButtons ? { opacity: '100%' } : { opacity: '0%' };

		return (
			<div
				id='quote-box'
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<Quote text={quotes[index].text} author={quotes[index].author} />
				<a id='tweet-quote' href={twitterJoke}>
					<Icon icon='cib:twitter' fontSize={33} />
				</a>
				<button id='new-quote' onClick={this.nextQuote}>
					<Icon
						icon='ic:baseline-navigate-next'
						fontSize={50}
						color={'white'}
					/>
				</button>
			</div>
		);
	}
}
