import React, { useState } from 'react';
import { quotes } from '../assets/Quotes.js';
import { Icon } from '@iconify/react';
import { Quote } from './Quote.js';

const twitterJoke =
	'https://twitter.com/intent/tweet?text=Just%20caught%20myself%20about%20to%20tweet%20an%20inspiring%20quote...%20I%20need%20a%20break,%20fr%20fr';

export function QuoteBox() {
	const [display, setDisplay] = useState('hidden');
	const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
	const handleMouseEnter = () => {
		setDisplay('visible');
	};
	const handleMouseLeave = () => {
		setDisplay('hidden');
	};
	const nextQuote = () => {
		setIndex(Math.floor(Math.random() * quotes.length));
	};

	return (
		<div
			id='quote-box'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Quote text={quotes[index].text} author={quotes[index].author} />
			<a className={display} id='tweet-quote' href={twitterJoke}>
				<Icon icon='cib:twitter' fontSize={33} />
			</a>
			<button className={display} id='new-quote' onClick={nextQuote}>
				<Icon icon='ic:baseline-navigate-next' fontSize={50} color={'white'} />
			</button>
		</div>
	);
}
