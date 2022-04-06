import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import ImageInput from './ImageInput';

export interface ChooseImageProps {
	onChange: (val: ChangeEvent) => void;
}

export const StyledHeader = styled.h1`
	font-size: 18px;
	font-weight: 500;
	line-height: 27px;
	text-align: center;
`

export const StyledSubHeader = styled.h2`
	margin-bottom: 32px;
	font-size: 10px;
	font-weight: 500;
	line-height: 15px;
	letter-spacing: -0.035em;
	text-align: center;
`

const ChooseImage = (props: ChooseImageProps) => {
	return <>
		<StyledHeader>Upload your image</StyledHeader>
		<StyledSubHeader>File should be Jpeg, Png,...</StyledSubHeader>
		<ImageInput {...props} />
	</>;
};

export default ChooseImage;