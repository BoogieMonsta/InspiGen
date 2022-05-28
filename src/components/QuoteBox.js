import { useState } from 'react';
import { quotes } from '../assets/Quotes.js';
import { Quote } from './Quote.js';
import { Twitter } from './Twitter.js';
import { Next } from './Next.js';

export function QuoteBox(props) {

	const [displayBtns, setDisplayBtns] = useState('hidden');
	const handleMouseEnter = () => {
		setDisplayBtns('visible');
	};
	const handleMouseLeave = () => {
		setDisplayBtns('hidden');
	};

	return (
		<div
			id='quote-box'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Quote text={quotes[props.index].text} author={quotes[props.index].author} />
			<Twitter visib={displayBtns} />
			<Next visib={displayBtns} trigger={props.onNext}/>
		</div>
	);
}
