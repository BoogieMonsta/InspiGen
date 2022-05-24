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
		// this.getQuotes = this.getQuotes.bind(this);
	}
	// getQuotes = async function () {
	// 	return await fetch('https://type.fit/api/quotes')
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			this.setQuotes(data);
	// 		});
	// };
	nextQuote = () => {
		this.setState(() => ({
			index: Math.floor(Math.random() * 1600),
		}));
	};
	// componentDidMount() {
	// 	this.setState(() => ({
	// 		quotes: this.getQuotes,
	// 	}));
	// 	console.log(this.state.quotes);
	// }
	render() {
		const quotes = this.state.quotes;
		const index = this.state.index;

		return (
			<div id='quote-box'>
				<Quote text={quotes[index].text} author={quotes[index].author} />
				<a id='tweet-quote' href='https://twitter.com/intent/tweet'>
					Tweet it
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
