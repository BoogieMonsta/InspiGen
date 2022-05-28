import React from 'react';
import styled from 'styled-components';

export const Quote = props => {
	return (
		<Wrapper>
			<Text>{props.text}</Text>
			<Author>{props.author}</Author>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Text = styled.p`
	font-size: 40px;
	text-align: left;
	color: white;
`;

const Author = styled.p`
	font-size: 25px;
	font-style: italic;
	text-align: right;
	transform: translate(-80px, -30px);
	position: relative;
	color: rgba(255, 255, 255, 0.65);
`;
