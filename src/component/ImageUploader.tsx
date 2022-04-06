import React, { ChangeEvent, useReducer } from 'react'
import styled from 'styled-components'
import Uploading from './Uploading'
import CompleteUpload from './CompleteUpload'
import ChooseImage from './ChooseImage'
import { ajaxUploadImageKit } from '../utils'

const CHOOSE = 'CHOOSE';
const UPLOADING = 'UPLOADING';
const COMPLETE = 'COMPLETE';

const StyledImageUploader = styled.div`
	padding: 36px 32px;
	margin: 0 auto;
	background: #FFFFFF;
	box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
	border-radius: 12px;
`

type STAGE = 'CHOOSE' | 'UPLOADING' | 'COMPLETE'

interface Progress {
	stage: STAGE;
	srcPath: '',
	url: ''
}

interface ProgressAction {
	type: STAGE;
	event?: ChangeEvent;
	url?: string;
}

const initProgress: Progress = {
	stage: CHOOSE,
	srcPath: '',
	url: ''
}

const reducer = (progress: any, action: ProgressAction) => {
	
	switch (action.type) {
		case UPLOADING:
			return { ...progress, stage: UPLOADING }
		case COMPLETE:
			return { ...progress, url: action.url, stage: COMPLETE }
		}

	return progress
}

const ImageUploader = () => {

	const [progress, setProgress] = useReducer(reducer, initProgress);	

	const onChange = (e: ChangeEvent) => {
		setProgress({type: UPLOADING})
		const target = e.target as HTMLInputElement;
		const files = (target.files as FileList);
		const getResult = ajaxUploadImageKit((result) => {
			const _result = JSON.parse(result)
			console.log(_result.url);
			setProgress({type: COMPLETE, url: _result.url});
		})
		getResult(files);
	}

	return <StyledImageUploader>
		{progress.stage === CHOOSE && <ChooseImage onChange={onChange} />}
		{progress.stage === UPLOADING && <Uploading />}
		{progress.stage === COMPLETE && <CompleteUpload imgSrc={progress.url} />}
	</StyledImageUploader>
}

export default ImageUploader