import { createContext, useEffect, useState } from 'react';
import { getProjectsData } from '../lib/firebase/firebase';

export const ProjectsContext = createContext({
	projects: null,
	setProjects: () => null,
});

export const ProjectsProvider = ({ children }) => {
	const [projects, setProjects] = useState(null);

	const fectProjectData = async () => {
		const projectData = await getProjectsData();
		setProjects(projectData);
	};
	useEffect(() => {
		fectProjectData();
	}, []);

	const value = {
		projects,
		setProjects,
	};

	return (
		<ProjectsContext.Provider value={value}>
			{children}
		</ProjectsContext.Provider>
	);
};
