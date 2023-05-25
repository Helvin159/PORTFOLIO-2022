import React, { Fragment, useContext } from 'react';
import Hero from '../../components/Hero';
import { PortfolioContext } from '../../contexts/portfolioProvider';

const Home = () => {
	const { portfolio } = useContext(PortfolioContext);

	return (
		<Fragment>
			<Hero props={portfolio} />
		</Fragment>
	);
};

export default Home;
