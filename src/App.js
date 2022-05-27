import { useState, useEffect } from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox.js';
import { quotes } from './assets/Quotes.js';

function App() {
	const [styleBg, setStyleBg] = useState(null);
	const [index, setIndex] = useState(Math.floor(Math.random() * quotes.length));

	const unsplashUrl = 'https://source.unsplash.com/random/1280x720/?nature';

	const fetchRequest = async () => {
		const data = await fetch(unsplashUrl);
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
		<div className='App' style={styleBg}>
			<QuoteBox index={index} onNext={nextQuote} />
		</div>
	);
}

export default App;
