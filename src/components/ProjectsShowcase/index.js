import React, { Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ProjectsShowcase = ({ props }) => {
	// console.log(props)
	return (
		<Row className='projects mx-auto'>
			{props.projects.map((i, k) => (
				<Fragment>
					<style>{`
						.card-${k}{
							background: linear-gradient( 0deg, rgba(0,0,0,0.9), rgba(0,0,0,.9)), url(${i.screenshot});
							background-size:cover;
							background-position:center center;
							background-repeat:no-repeat;
						}
					`}</style>
					<Col sm={6} key={k} className={`projects__cards card-${k}`}>
						<div className='projects__cards__card'>
							<h3>{i.projectName}</h3>
							{i.workDone !== '' && <p>{i.workDone}</p>}
							{console.log(i)}

							<ul>
								{i.languages.map((i, k) => (
									<li key={k}>{i.lang}</li>
								))}
							</ul>
							{console.log(i)}
							<div className='py-3'>
								<a href={i.url} target='_blank' rel='noreferrer'>
									Visit site
								</a>
							</div>
						</div>
					</Col>
				</Fragment>
			))}
		</Row>
	)
}

// const FrameWorksLi = ({ props }) => {
// 	console.log(props.languages, 'frameworks')

// 	return props.languages.map((i, k) => (
// 		<li key={k}>{console.log(i, 'results')}</li>
// 	))
// }

export default ProjectsShowcase

