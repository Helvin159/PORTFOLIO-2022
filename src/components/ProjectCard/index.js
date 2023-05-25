import React from 'react';
import Col from 'react-bootstrap/Col';
import isOdd from '../../lib/isOdd';

const ProjectCard = () => {
	return (
		<div key={k} className={`${isOdd(k) ? 'row flex-row-reverse' : 'row'}`}>
			<Col
				sm={6}
				key={`${k}-${i.projectName}`}
				className={`projects__cards card-${k}`}>
				<div className='projects__cards__card'>
					<a href={i.url} target='_blank' rel='noreferrer'>
						<img
							className='img-responsive'
							alt={i.projectName}
							src={i.screenshot}
						/>
					</a>
				</div>
			</Col>
			<Col sm={6} key={`${k}`} className={`projects__cards`}>
				<div className='projects__cards__card'>
					<div className='text-center'>
						<h3>{i.projectName}</h3>
					</div>
					<div>{i.workDone !== '' && <p>{i.workDone}</p>}</div>

					<ul>
						{i.languages.map((i, k) => (
							<li key={k}>{i.lang}</li>
						))}
					</ul>

					<div className='py-3'>
						<Link to={i.projectSlug}>Project Page</Link>
						<br />
						<a href={i.url} target='_blank' rel='noreferrer'>
							Visit site
						</a>
					</div>
				</div>
			</Col>
		</div>
	);
};

export default ProjectCard;
