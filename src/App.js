import React, { useState } from 'react';
import './App.css';
import './Quotes.js';
import { quotes } from './Quotes.js';
import { createApi } from 'unsplash-js';
import { Icon } from '@iconify/react';

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

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      index: Math.floor(Math.random() * quotes.length),
			image: '',
		};
		this.nextQuote = this.nextQuote.bind(this);
		// this.handleMouseEnter = this.handleMouseEnter.bind(this);
		// this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}
  // const [display, setDisplay] = useState('hidden');
  // const handleMouseEnter = () => {
  //   console.log('we in here');
	// 	setDisplay('visible');
	// };
	// const handleMouseLeave = () => {
  //   console.log('we outta here');
	// 	setDisplay('hidden');
	// };
	nextQuote = () => {
		this.setState(() => ({
			index: Math.floor(Math.random() * quotes.length),
		}));
	};
	render() {
		const index = this.state.index;
		// const showButtons = this.state.showButtons;
		// const styleButtons = showButtons ? { opacity: '100%' } : { opacity: '0%' };

		return (
			<div
				id='quote-box'
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<Quote text={quotes[index].text} author={quotes[index].author} />
				<a id='tweet-quote' href={twitterJoke}>
					<Icon icon='cib:twitter' fontSize={33} />
				</a>
				<button id='new-quote' onClick={this.nextQuote}>
					<Icon
						icon='ic:baseline-navigate-next'
						fontSize={50}
						color={'white'}
					/>
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
