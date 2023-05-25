import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PortfolioContext } from './contexts/portfolioProvider';

import ScrollToTop from './lib/ScrollToTop';
import Outlet from './routes/Outlet/Outlet';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Work from './routes/Work/Work';

// Style
import './assets/css/style.css';

// Upload json to Firestore with below imports
// import { genInfo, nav_links } from './data/data';
// import { addCollectionAndDocs } from './lib/firebase/firebase';

const App = () => {
	const portfolioData = useContext(PortfolioContext);
	const { portfolio } = portfolioData;

	if (portfolio) {
		return (
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<Outlet />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='work/*' element={<Work />} />
						<Route path='contact' element={<Contact />} />
					</Route>
				</Routes>
			</ScrollToTop>
		);
	}
};

export default App;
