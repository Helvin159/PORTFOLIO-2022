import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = ({ props }) => {
	// console.log(props, 'footer')
	return (
		<Container className='egg-shell-font' fluid>
			<Container className='text-center py-4 mx-auto'>
				<h1 className='display-1'>{props.name}</h1>
			</Container>
			<Row className='mx-auto max-w-1024 jobs'>
				<Col className='jobs__cards' sm={6}>
					{props.jobs.map((i, k) => (
						<div className='jobs__cards__card p-3' key={k}>
							<h3>{i.company}</h3>
							<p className='m-0'>Position: {i.position}</p>
							<p>Time: {i.total_time}</p>
						</div>
					))}
				</Col>
				<Col sm={6}>
					<div className='jobs__cards__card'>
						<h3>Skills</h3>
					</div>
					<div className='jobs__cards__card'>
						<h3>Education</h3>
					</div>
					<div className='jobs__cards__card'>
						<h3>Continuing Education</h3>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default About

