import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const Next = props => {
	return (
		<Button
			className={props.visib}
			onClick={props.trigger}
		>
			<Icon icon='ic:baseline-navigate-next' fontSize={50} color={'white'} />
		</Button>
	);
};

const Button = styled.button`
	width: fit-content;
	border: none;
	background: none;
	color: #c2c2c2;
	padding: 1em;
	position: sticky;
	bottom: 0;
	left: 100%;
	cursor: pointer;
	transform: translateX(-40px);
`;
