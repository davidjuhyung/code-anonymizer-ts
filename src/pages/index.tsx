import React from 'react';

import HomeContent from '../sections/home/HomeContent';
import { ThemeWrapper } from '../theme';

const Home = () => {
	return (
		<>
			<title>Code Anonymizer</title>

			<ThemeWrapper>
				<HomeContent />
			</ThemeWrapper>
		</>
	);
};

export default Home;
