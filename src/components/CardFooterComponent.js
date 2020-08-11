import React from 'react';
import { Button } from '@blueprintjs/core';

export default function CardFooter({ getQuotes, quote }) {
	const { text, author } = quote;

	return (
		<div>
			<a
				className='bp3-button'
				href={`https://twitter.com/intent/tweet?text=${text} by ${author}.%0D&via=imINKED`}
				target='_blank'
				rel='noopener noreferrer'
				type='button'
				id='tweet-quote'
			>
				<i className='fab fa-twitter' />
			</a>
			<Button id='new-quote' type='button' onClick={() => getQuotes()}>
				<i className='fas fa-sync' />
			</Button>
		</div>
	);
}
