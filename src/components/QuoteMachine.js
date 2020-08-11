import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';
import CardFooter from './CardFooterComponent';
import Quote from './QuoteComponent';

export default function QuoteMachine() {
	return (
		<div className='container'>
			<Card id='quote-box' className='bp3-dark' elevation={Elevation.TWO}>
				<Quote />
				<CardFooter />
			</Card>
		</div>
	);
}
