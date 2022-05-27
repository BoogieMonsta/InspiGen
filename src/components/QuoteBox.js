import { useState } from 'react';
import { quotes } from '../assets/Quotes.js';
import { Quote } from './Quote.js';
import { Twitter } from './Twitter.js';
import { Next } from './Next.js';

export function QuoteBox() {

	const [displayBtns, setDisplayBtns] = useState('hidden');
	const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));
	const handleMouseEnter = () => {
		setDisplayBtns('visible');
	};
	const handleMouseLeave = () => {
		setDisplayBtns('hidden');
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
			<Twitter visib={displayBtns} />
			<Next visib={displayBtns} trigger={nextQuote}/>
		</div>
	);
}
