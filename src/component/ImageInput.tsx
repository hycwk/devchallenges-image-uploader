import React from 'react';
import styled from 'styled-components';
import ImagePlaceholder from '../assets/image.svg';

const StyledImageInput = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const StyedImagePlaceArea = styled.div`
	width: 100%;
	padding: 36px 12px 40px;
	background: #F6F8FB;
	border: 1px dashed #97BEF4;
	box-sizing: border-box;
	border-radius: 12px;
	text-align: center;
`

const StyledImageDraggingHint = styled.div`
	margin-top: 36px;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	color: #BDBDBD;
`

const StyledImageOrLabel = styled.div`
	margin-top: 36px;
	margin-bottom: 36px;
	text-align: center;
	font-size: 12px;
	font-weight: 500;
	line-height: 18px;
	color: #BDBDBD;
`

export const StyledChooseButton = styled.button`
	padding: 8px 16px;
	margin: 0 auto;
	border: none;
	background: #2F80ED;
	border-radius: 8px;
	color: #ffffff;
`

const ImageInput = () => {
	return <StyledImageInput>
		<StyedImagePlaceArea>
			<img src={ImagePlaceholder} />
			<StyledImageDraggingHint>
				Drag & Drop your image here
			</StyledImageDraggingHint>
		</StyedImagePlaceArea>
		<StyledImageOrLabel>
			Or
		</StyledImageOrLabel>
		<StyledChooseButton>Choose a file</StyledChooseButton>
	</StyledImageInput>
}

export default ImageInput;