import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProjectsContext } from '../../contexts/projectsContext';
import ProjectsShowcase from '../../components/ProjectsShowcase';
import Project from '../Project/Project';

const Work = () => {
	const { projects } = useContext(ProjectsContext);

	return (
		<Routes>
			<Route index element={<ProjectsShowcase props={projects} />} />
			<Route path=':project' element={<Project />} />
		</Routes>
	);
};

export default Work;
