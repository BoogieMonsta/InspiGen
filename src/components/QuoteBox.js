import { useState } from 'react';
import { quotes } from '../assets/Quotes.js';
import { Quote } from './Quote.js';
import { Twitter } from './Twitter.js';
import { Next } from './Next.js';
import styled from 'styled-components';

export const QuoteBox = props => {
	const [displayBtns, setDisplayBtns] = useState(false);
	const handleMouseEnter = () => {
		setDisplayBtns(true);
	};
	const handleMouseLeave = () => {
		setDisplayBtns(false);
	};

	return (
		<Wrapper
			id='quote-box'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<Quote
				text={quotes[props.index].text}
				author={quotes[props.index].author}
			/>
			<Twitter displayBtns={displayBtns} />
			<Next displayBtns={displayBtns} trigger={props.onNext} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 20px 75px 60px 75px;
	max-width: 25%;
	flex-direction: column;
	border-radius: 2em;
	background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(0, 0, 0, 0.2));
	backdrop-filter: blur(15px) brightness(60%) contrast(70%);
	filter: drop-shadow(1px 2px 3px #00000073);
`;
