import React, { useState, useEffect } from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import CardFooter from './CardFooterComponent';
import Quote from './QuoteComponent';

export default function QuoteMachine() {
	const [ quote, setQuote ] = useState({});

	const getQuotes = async () => {
		const res = await fetch('https://type.fit/api/quotes');
		const data = await res.json();
		const randomQuote = Math.floor(Math.random() * data.length);
		setQuote(data[randomQuote]);
	};

	useEffect(
		() => {
			getQuotes();
		},
		[ setQuote ]
	);

	return (
		<div className='container'>
			<Card id='quote-box' className='bp3-dark' elevation={Elevation.TWO}>
				<Quote quote={quote} />
				<CardFooter quote={quote} getQuotes={getQuotes} />
			</Card>
		</div>
	);
}
