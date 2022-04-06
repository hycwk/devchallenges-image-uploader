import React, { useState } from 'react';
import styled from 'styled-components';
import { copyTextToClipboard } from 'utils';
import tickIcon from '../assets/check_circle_black_24dp.svg'

interface Props {
	imgSrc: string
}

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
		max-width: 100%;
	}
`

const StyledURL = styled.div`
	overflow: hidden;
	padding-left: 8px;
	white-space: nowrap;
	text-overflow: ellipsis;
	font-size: 8px;
	font-weight: 500;
	line-height: 12px;
	text-align: center;
`

const StyledCopyButton = styled.button`
	width: 70px;
	padding: 8px 16px;
	border: none;
	background: #2F80ED;
	border-radius: 8px;
	white-space: nowrap;
	font-size: 8px;
	color: #ffffff;
	cursor: pointer;
`

const CompleteUpload = ({imgSrc}: Props) => {
	const [copied, setCopied] = useState(false)
	const onClickCopyButton = (imgSrc:string) => {
		copyTextToClipboard(imgSrc)
		setCopied(true)
	}
	return <StyledCompleteUpload>
		<img src={tickIcon} alt="" width="35" />
		<StyledHeader>Uploaded Successfully!</StyledHeader>
		<StyledImageWrapper>
			{imgSrc.length > 0 && <img src={imgSrc} alt="" />}
		</StyledImageWrapper>
		<StyledLinkCopier>
			<StyledURL>
				{imgSrc}
			</StyledURL>
			<StyledCopyButton onClick={() => onClickCopyButton(imgSrc)}>
				{copied || `Copy Link`}
				{copied && `Copied`}
			</StyledCopyButton>
		</StyledLinkCopier>
	</StyledCompleteUpload>
}

export default CompleteUpload
