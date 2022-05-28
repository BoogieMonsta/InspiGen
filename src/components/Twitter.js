import { Icon } from '@iconify/react';
import styled from 'styled-components';

const twitterJoke =
	'https://twitter.com/intent/tweet?text=Just%20caught%20myself%20about%20to%20tweet%20an%20inspiring%20quote...%20I%20need%20a%20break,%20fr%20fr';

export const Twitter = props => {
	const opacity = props.displayBtns ? '100%' : '0%';
	return (
		<TweetThis href={twitterJoke} style={{ '--opacity': opacity }}>
			<Icon icon='cib:twitter' fontSize={33} />
		</TweetThis>
	);
};

const TweetThis = styled.a`
	opacity: var(--opacity);
	transition: opacity 0.3s ease-in-out;
	text-decoration: none;
	color: #1d9cef;
	font-weight: bold;
	position: sticky;
	bottom: 0;
	right: 100%;
	margin: auto;
	padding-left: 1em;
	transform: translate(60px, 61px);
	display: block;
	width: fit-content;
`;
