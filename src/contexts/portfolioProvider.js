import { createContext, useState, useEffect } from 'react';
import { getPortfolioData } from '../lib/firebase/firebase';

export const PortfolioContext = createContext({
	portfolio: null,
	setPortfolio: () => null,
});

export const PortfolioProvider = ({ children }) => {
	const [portfolio, setPortfolio] = useState(null);

	const fetchPortfolioData = async () => {
		const portfoliodData = await getPortfolioData();
		setPortfolio(portfoliodData);
	};

	useEffect(() => {
		fetchPortfolioData();
	}, []);

	const value = { portfolio, setPortfolio };

	return (
		<PortfolioContext.Provider value={value}>
			{children}
		</PortfolioContext.Provider>
	);
};
