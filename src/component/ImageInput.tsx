import React, { useRef } from 'react';
import styled from 'styled-components';
import ImagePlaceholder from '../assets/image.svg';
import { ChooseImageProps } from './ChooseImage'

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

const StyledChooseButton = styled.button`
	padding: 8px 16px;
	margin: 0 auto;
	border: none;
	background: #2F80ED;
	border-radius: 8px;
	color: #ffffff;
`

const ImageInput = ({onChange}: Partial<ChooseImageProps>) => {

	const $inputFile = useRef(null)

	return <StyledImageInput>
		<StyedImagePlaceArea>
			<img src={ImagePlaceholder} alt="" />
			<StyledImageDraggingHint>
				Drag & Drop your image here
			</StyledImageDraggingHint>
		</StyedImagePlaceArea>
		<StyledImageOrLabel>
			Or
		</StyledImageOrLabel>
		<StyledChooseButton>Choose a file</StyledChooseButton>
		<input ref={$inputFile} type="file" onChange={onChange}/>
	</StyledImageInput>
}

export default ImageInput;