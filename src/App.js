import React, { useState } from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox.js';

function App() {
	const [styleBg, setStyleBg] = useState(null);

	const unsplashUrl = 'https://source.unsplash.com/random/1280x720/?nature';

	const nextPic = () => {
		const styleBg = {
			background: `no-repeat center/100% url(${unsplashUrl})`
		};
		setStyleBg(styleBg);
	};

	React.useEffect(() => {
		nextPic();
	}, []);

	return (
		<div className='App' style={styleBg}>
			<QuoteBox trigger={nextPic} />
		</div>
	);
}

export default App;
