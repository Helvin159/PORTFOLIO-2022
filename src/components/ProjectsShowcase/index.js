import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import isOdd from '../../lib/isOdd'

const ProjectsShowcase = ({ props }) => {
	// console.log(props)

	return (
		<div className='projects mx-auto'>
			{props.projects.map((i, k) => (
				<Row key={k} className={`${isOdd(k) && 'flex-row-reverse'}`}>
					<Col
						sm={6}
						key={`${k}-${i.projectName}`}
						className={`projects__cards card-${k}`}>
						<div className='projects__cards__card'>
							<img
								className='img-responsive'
								alt={i.projectName}
								src={i.screenshot}
							/>
						</div>
					</Col>
					<Col sm={6} key={`${k}`} className={`projects__cards`}>
						<div className='projects__cards__card'>
							<div className='text-center'>
								<h3>{i.projectName}</h3>
								{i.workDone !== '' && <p>{i.workDone}</p>}
							</div>

							<ul>
								{i.languages.map((i, k) => (
									<li key={k}>{i.lang}</li>
								))}
							</ul>

							<div className='py-3'>
								<a href={i.url} target='_blank' rel='noreferrer'>
									Visit site
								</a>
							</div>
						</div>
					</Col>
				</Row>
			))}
		</div>
	)
}

// const FrameWorksLi = ({ props }) => {
// 	console.log(props.languages, 'frameworks')

// 	return props.languages.map((i, k) => (
// 		<li key={k}>{console.log(i, 'results')}</li>
// 	))
// }

export default ProjectsShowcase

