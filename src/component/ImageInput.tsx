import React, { DOMElement, ReactElement, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
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
	cursor: pointer;
`

const ImageInput = ({onChange}: Partial<ChooseImageProps>) => {

	const [clickCount, setClickCount] = useState<number>(0)

	const inputFile = useRef<any>(null)

	useEffect(() => {
		if (inputFile && inputFile.current) {
			inputFile.current.click()
		}
	}, [clickCount])
	

	return <StyledImageInput>
		<StyedImagePlaceArea>
			<Image src="/assets/image.svg" alt="" width="115" height="90" />
			<StyledImageDraggingHint>
				Drag & Drop your image here
			</StyledImageDraggingHint>
		</StyedImagePlaceArea>
		<StyledImageOrLabel>
			Or
		</StyledImageOrLabel>
		<StyledChooseButton onClick={() => setClickCount(clickCount + 1)}>Choose a file</StyledChooseButton>
		<input ref={inputFile} type="file" onChange={onChange} hidden={true}/>
	</StyledImageInput>
}

export default ImageInput;