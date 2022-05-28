import { Icon } from '@iconify/react';

export const Next = props => {
	return (
		<button className={props.visib} id='new-quote' onClick={props.trigger}>
			<Icon icon='ic:baseline-navigate-next' fontSize={50} color={'white'} />
		</button>
	);
};
