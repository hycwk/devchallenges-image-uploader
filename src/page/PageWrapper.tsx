import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface PageWrapperProps {
	children?: ReactNode;
}

const StyledPageWrapper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	background: #FAFAFB;
`

const StyledContentContainer = styled.div`
	position: absolute;
	width: 400px;
	max-height: 470px;
	max-width: 90%;
	max-height: 90%;
	top: 50%;
	left: 50%;
	transform: translateX(-50%) translateY(-50%);
`

const PageWrapper = ({children}: PageWrapperProps) => {
	return <StyledPageWrapper><StyledContentContainer>{children}</StyledContentContainer></StyledPageWrapper>
}

export default PageWrapper