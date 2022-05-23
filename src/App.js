import React from 'react';
import './App.css';

function App() {
	return (
		<div className='App'>
			<QuoteBox />
		</div>
	);
}

export default App;

class QuoteBox extends React.Component {



	render() {
		return (
			<div id='quote-box'>
				<Quote />
				<a id='tweet-quote' href='https://twitter.com/intent/tweet'>
					Tweet it
				</a>
			</div>
		);
	}
}

class Quote extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '"Patience and impatience are the root of all evil."',
			author: 'Mama Panda',
		};
	}

  nextQuote = () => {
    // TODO: switch quote
    this.setState(() => ({
      text: '"We have pates, we have riz."',
      author: 'Babati'
    }));
  };

	render() {
		return (
			<div id='quote-wrap'>
				<p id='text'>{this.state.text}</p>
				<p id='author'>{this.state.author}</p>
				<button id='new-quote' onClick={this.nextQuote}>Next Quote</button>
			</div>
		);
	}
}
