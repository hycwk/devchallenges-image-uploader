import React from 'react';
import ImageUploader from '../component/ImageUploader';
import PageWrapper from '../page/PageWrapper';
import '../../public/assets/App.css';
import '../../public/assets/index.css';

function App() {
  return (
		<PageWrapper>
			<ImageUploader/>
		</PageWrapper>
  );
}

export default App;
