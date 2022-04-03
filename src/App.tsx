import React from 'react';
import './App.css';
import ImageUploader from './component/ImageUploader';
import PageWrapper from './page/PageWrapper'

function App() {
  return (
		<PageWrapper>
			<ImageUploader/>
		</PageWrapper>
  );
}

export default App;
