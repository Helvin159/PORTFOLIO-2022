import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PortfolioContext } from './contexts/portfolioProvider';

import Home from './routes/Home/Home';
import About from './routes/About/About';
import Work from './routes/Work/Work';
import Outlet from './routes/Outlet/Outlet';
import ScrollToTop from './lib/ScrollToTop';

// Style
import './assets/css/style.css';
// import { genInfo, nav_links } from './data/data';
// import { addCollectionAndDocs } from './lib/firebase/firebase';

const App = () => {
	const [MyData, setMyData] = useState(null);

	const portfolioData = useContext(PortfolioContext);
	const { portfolio } = portfolioData;

	const fetchedData = useCallback(() => {
		fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => {
				return res.json();
			})
			.then((myJson) => {
				setMyData(myJson);
			});
	}, [setMyData]);

	useEffect(() => {
		fetchedData();
		// addCollectionAndDocs('portfolio-info', genInfo);
	}, [fetchedData, portfolio]);

	if (portfolio) {
		return (
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<Outlet props={MyData} />}>
						<Route index element={<Home />} />
						<Route path='about' element={<About />} />
						<Route path='work/*' element={<Work />}></Route>
						{
							// <Route path='/contact' element={<Contact props={MyData} />} />
						}
					</Route>
				</Routes>
			</ScrollToTop>
		);
	}
};

export default App;
