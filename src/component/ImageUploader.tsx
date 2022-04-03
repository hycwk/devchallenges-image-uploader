import React from 'react'
import styled from 'styled-components'
import ImageInput from './ImageInput'
import Uploading from './Uploading'
import CompleteUpload from './CompleteUpload'

const StyledImageUploader = styled.div`
	padding: 36px 32px;
	margin: 0 auto;
	background: #FFFFFF;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
`

const StyledHeader = styled.h1`
	font-size: 18px;
	font-weight: 500;
	line-height: 27px;
	text-align: center;
`

const StyledSubHeader = styled.h2`
	margin-bottom: 32px;
	font-size: 10px;
	font-weight: 500;
	line-height: 15px;
	letter-spacing: -0.035em;
	text-align: center;
`

const ChooseImage = () => {
	return <>
		<StyledHeader>Upload your image</StyledHeader>
		<StyledSubHeader>File should be Jpeg, Png,...</StyledSubHeader>
		<ImageInput />
	</>
}

const ImageUploader = () => {
	return <StyledImageUploader>
		<ChooseImage />
		{/* <Uploading /> */}
		{/* <CompleteUpload /> */}
	</StyledImageUploader>
}

export default ImageUploader