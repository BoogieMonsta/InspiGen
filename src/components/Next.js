import { Icon } from '@iconify/react';
import styled from 'styled-components';

export const Next = props => {
	const opacity = props.displayBtns ? '100%' : '0%';
	return (
		<Button
			className={props.visib}
			onClick={props.trigger}
			style={{ '--opacity': opacity }}
		>
			<Icon icon='ic:baseline-navigate-next' fontSize={50} color={'white'} />
		</Button>
	);
};

const Button = styled.button`
	opacity: var(--opacity);
	transition: opacity 0.6s ease-in-out;
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
