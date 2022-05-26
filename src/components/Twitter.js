import { Icon } from '@iconify/react';

const twitterJoke =
	'https://twitter.com/intent/tweet?text=Just%20caught%20myself%20about%20to%20tweet%20an%20inspiring%20quote...%20I%20need%20a%20break,%20fr%20fr';

export function Twitter(e) {
	return (
		<a className={e.visib} id='tweet-quote' href={twitterJoke}>
			<Icon icon='cib:twitter' fontSize={33} />
		</a>
	);
}
