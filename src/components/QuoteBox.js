import { useState } from 'react';
import { quotes } from '../assets/Quotes.js';
import { Quote } from './Quote.js';
import { Twitter } from './Twitter.js';
import { Next } from './Next.js';

export function QuoteBox(props) {
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
			<Twitter visib={display} />
			<Next visib={display} trigger={nextQuote}/>
		</div>
	);
}
