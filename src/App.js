import React from 'react';
import './App.css';
import './Quotes.js';
import { quotes } from './Quotes.js';

function App() {
	return (
		<div className='App'>
			<QuoteBox />
		</div>
	);
}

export default App;

class QuoteBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quotes: quotes,
			index: Math.floor(Math.random() * 1600),
		};
		this.nextQuote = this.nextQuote.bind(this);
	}
	nextQuote = () => {
		this.setState(() => ({
			index: Math.floor(Math.random() * 1600),
		}));
	};
	render() {
		const quotes = this.state.quotes;
		const index = this.state.index;

		return (
			<div id='quote-box'>
				<Quote text={quotes[index].text} author={quotes[index].author} />
				<a id='tweet-quote' href='https://twitter.com/intent/tweet?text=Just%20caught%20myself%20about%20to%20tweet%20an%20inspiring%20quote...%20I%20need%20a%20break,%20fr%20fr'>
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
