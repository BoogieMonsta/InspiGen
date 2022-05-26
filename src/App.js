import React, { useCallback, useRef, useState } from 'react';
import './App.css';
import './Quotes.js';
import { quotes } from './Quotes.js';
import { createApi } from 'unsplash-js';

const twitterJoke =
	'https://twitter.com/intent/tweet?text=Just%20caught%20myself%20about%20to%20tweet%20an%20inspiring%20quote...%20I%20need%20a%20break,%20fr%20fr';

function App() {
	const [styleBg, setStyleBg] = useState(null);

	const unsplash = createApi({
		// See https://unsplash.com/developers
		accessKey: '6hSx6_IoASMmhQ_AETA0hd6gZoOPrDNM1zO5QjLTw9w',
	});

	React.useEffect(() => {
		unsplash.photos.get({ photoId: 'mtNweauBsMQ' }).then(result => {
			if (result.errors) {
				console.log('error occurred: ', result.errors[0]);
			} else {
				const styleBg = {
					background: `no-repeat center/100% url(${result.response.urls.regular})`,
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

class QuoteBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: Math.floor(Math.random() * quotes.length),
			image: '',
		};
		this.nextQuote = this.nextQuote.bind(this);
	}
	nextQuote = () => {
		this.setState(() => ({
			index: Math.floor(Math.random() * quotes.length),
		}));
	};
	render() {
		const index = this.state.index;
		const image = this.state.image;
		const backgroundPicStyle = { backgroundImage: image };

		return (
			<div id='quote-box' style={backgroundPicStyle}>
				<Quote text={quotes[index].text} author={quotes[index].author} />
				<a id='tweet-quote' href={twitterJoke}>
					tweet it
				</a>
				<br />
				<button id='new-quote' onClick={this.nextQuote}>
					Next Quote
				</button>
			</div>
		);
	}
}

class Quote extends React.Component {
	render() {
		return (
			<div id='quote-wrap'>
				<p id='text'>{this.props.text}</p>
				<p id='author'>{this.props.author}</p>
			</div>
		);
	}
}
