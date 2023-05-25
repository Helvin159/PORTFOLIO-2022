import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectsContext } from '../../contexts/projectsContext';

const Project = () => {
	const { project } = useParams();
	const { projects } = useContext(ProjectsContext);
	const [currentProject, setCurrentProject] = useState(null);

	useEffect(() => {
		projects.forEach((i) => {
			if (i.slug === project) {
				setCurrentProject(i);
			}
		});
	}, [projects, project, setCurrentProject]);

	if (currentProject) {
		return (
			<div>
				<h1>{currentProject.projectName}</h1>
			</div>
		);
	}
};

export default Project;
