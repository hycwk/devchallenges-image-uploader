import React from 'react';
import styled from 'styled-components';

const StyledLoadingAnimation = styled.div`
	overflow: hidden;
	position: relative;
	width: 100%;
	height: 6px;
	margin-top: 28px;
	background: #F2F2F2;
	border-radius: 8px;
	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		min-width: 50px;
		width: 20%;
		background: #2F80ED;
		border-radius: 8px;
		animation: loading-animation infinite 2s linear;
	}
	@keyframes loading-animation {
		from {
			left: -20%;
		}
		to {
			left: 100%;
		}
	}
`

const  Uploading = () => {
	return <>
		Uploading...
		<StyledLoadingAnimation />
	</>;
};
export default Uploading
