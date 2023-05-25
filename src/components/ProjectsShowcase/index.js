import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import isOdd from '../../lib/isOdd';
import { Link } from 'react-router-dom';

const ProjectsShowcase = ({ props }) => {
	return (
		<Container className='maxW1024 mx-auto' fluid>
			<Container className='text-center egg-shell-font pt-3'>
				<h2 className='font48'>Previous Projects</h2>
			</Container>
			<div className='projects mx-auto'>
				{props.map((i, k) => (
					<div
						key={k}
						className={`${isOdd(k) ? 'row flex-row-reverse' : 'row'}`}>
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
									<Link to={i.slug}>Project Page</Link>
									<br />
									<a href={i.url} target='_blank' rel='noreferrer'>
										Visit site
									</a>
								</div>
							</div>
						</Col>
					</div>
				))}
			</div>
		</Container>
	);
};

export default ProjectsShowcase;
