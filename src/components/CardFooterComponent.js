import React from 'react';
import { Button } from '@blueprintjs/core';

export default function CardFooter() {
	return (
		<div>
			<a className='bp3-button' href='twitter.com/intent/tweet' type='button' id='tweet-quote'>
				<i className='fab fa-twitter' />
			</a>
			<Button id='new-quote'>
				<i className='fas fa-sync' />
			</Button>
		</div>
	);
}
