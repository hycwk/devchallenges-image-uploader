import React from 'react';
import styled from 'styled-components';
import tickIcon from '../assets/check_circle_black_24dp.svg'

const StyledCompleteUpload = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const StyledHeader = styled.div`
	margin: 12px auto 24px;
	font-size: 18px;
	font-weight: 500;
	line-height: 27px;
	text-align: center;
`

const StyledLinkCopier = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2px;
	background: #F6F8FB;
	border: 1px solid #E0E0E0;
	box-sizing: border-box;
	border-radius: 8px;
`

const StyledImageWrapper = styled.div`
	overflow: hidden;
	margin-bottom: 24px;
	border-radius: 12px;
	img {
		display: block;
	}
`

const StyledURL = styled.div`
	padding-left: 8px;
	font-size: 8px;
	font-weight: 500;
	line-height: 12px;
	text-align: center;
`

const StyledCopyButton = styled.button`
	padding: 8px 16px;
	border: none;
	background: #2F80ED;
	border-radius: 8px;
	font-size: 8px;
	color: #ffffff;
`

const CompleteUpload = () => {
	return <StyledCompleteUpload>
		<img src={tickIcon} alt="" width="35" />
		<StyledHeader>Uploaded Successfully!</StyledHeader>
		<StyledImageWrapper>
			<img src="https://via.placeholder.com/338x224" />
		</StyledImageWrapper>
		<StyledLinkCopier>
			<StyledURL>
				https://domain.com/image.jpg
			</StyledURL>
			<StyledCopyButton>
				Copy Link
			</StyledCopyButton>
		</StyledLinkCopier>
	</StyledCompleteUpload>
}

export default CompleteUpload
