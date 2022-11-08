import { createContext, useState } from 'react'

export const PortfolioContext = createContext({
	portfolio: null,
	setPortfolio: () => null,
})

export const PortfolioProvider = ({ children }) => {
	const [portfolio, setPortfolio] = useState(null)
	const value = { portfolio, setPortfolio }

	return (
		<PortfolioContext.Provider value={value}>
			{children}
		</PortfolioContext.Provider>
	)
}

