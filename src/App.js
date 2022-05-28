import { useState, useEffect } from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox.js';
import { quotes } from './assets/Quotes.js';
import styled from 'styled-components';

const App = () => {
	const [styleBg, setStyleBg] = useState(null);
	const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));

	const unsplashUrl = 'https://source.unsplash.com/random/1280x720/?nature';

	const fetchRequest = async () => {
		const data = await fetch(unsplashUrl);
		nextPic(data);
	};

	const nextPic = data => {
		const styleBg = {
			backgroundImage: `url(${data.url})`,
		};
		setStyleBg(styleBg);
	};

	const nextQuote = () => {
		setIndex(Math.floor(Math.random() * quotes.length));
		fetchRequest();
	};

	useEffect(() => {
		fetchRequest();
	}, []);

	return (
		<AppWrapper className='App' style={styleBg}>
			<QuoteBox index={index} onNext={nextQuote} />
		</AppWrapper>
	);
};

const AppWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-size: cover !important;
	background-repeat: no-repeat;
	background-position: center;
	transition: background-image 1s ease-in-out;
`;
export default App;

