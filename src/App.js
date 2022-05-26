import React, { useState } from 'react';
import './App.css';
import { createApi } from 'unsplash-js';
import { QuoteBox } from './QuoteBox.js';

function App() {
	const [styleBg, setStyleBg] = useState(null);

	const unsplash = createApi({
		accessKey: '6hSx6_IoASMmhQ_AETA0hd6gZoOPrDNM1zO5QjLTw9w',
	});

	React.useEffect(() => {
		unsplash.photos.get({ photoId: 'mtNweauBsMQ' }).then(result => {
			if (result.errors) {
				console.log('error occurred: ', result.errors[0]);
			} else {
				const styleBg = {
					background: `no-repeat center/100% url(${result.response.urls.regular})`,
					backgroundSize: 'cover',
				};
				setStyleBg(styleBg);
			}
		});
	}, [unsplash.photos]);

	return (
		<div className='App' style={styleBg}>
			<QuoteBox />
		</div>
	);
}

export default App;
