import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PortfolioProvider } from './contexts/portfolioProvider';
import App from './App';
import { ProjectsProvider } from './contexts/projectsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<PortfolioProvider>
				<ProjectsProvider>
					<App />
				</ProjectsProvider>
			</PortfolioProvider>
		</BrowserRouter>
	</React.StrictMode>
);
