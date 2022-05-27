import React, { useState } from 'react';
import './App.css';
import { QuoteBox } from './components/QuoteBox.js';

function App() {
	const [styleBg, setStyleBg] = useState(null);

	React.useEffect(() => {
		const styleBg = {
			background: `no-repeat center/100% url('https://source.unsplash.com/random/1280x720/?nature')`,
		};
		setStyleBg(styleBg);
	}, []);

	return (
		<div className='App' style={styleBg}>
			<QuoteBox />
		</div>
	);
}

export default App;
