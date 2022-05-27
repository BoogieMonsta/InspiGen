import { useState, useEffect } from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox.js';

function App() {
	const [styleBg, setStyleBg] = useState(null);

	const unsplashUrl = 'https://source.unsplash.com/random/1280x720/?nature';


	useEffect(() => {
		const fetchRequest = async () => {
			console.log('fetching...');
			const data = await fetch(unsplashUrl);
      const styleBg = {
        backgroundImage: `url(${data.url})`,
      };
      setStyleBg(styleBg);
			console.log('fetched', data.url);
		};

		fetchRequest();
	}, []);

	return (
		<div className='App' style={styleBg}>
			<QuoteBox />
		</div>
	);
}

export default App;
