import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const About = ({ props }) => {
	return (
		<Container className='egg-shell-font' fluid>
			<Container className='text-center py-4 mx-auto'>
				<h1 className='display-1'>Helvin Rymer</h1>
			</Container>
			<Row className='mx-auto max-w-1024 jobs'>
				<Col className='jobs__cards' sm={6}>
					<div className='jobs__cards__card p-3'>
						<h3>iMedia Inc</h3>
						<p className='m-0'>Position: Front End Developer</p>
						<p>Time:</p>
					</div>
					<div className='jobs__cards__card p-3'>
						<h3>MrRymer.com</h3>
						<p className='m-0'>Position: Full Stack Developer</p>
						<p>Time:</p>
					</div>
					<div className='jobs__cards__card p-3'>
						<h3>Trailways.com</h3>
						<p className='m-0'>Position: Front End Developer</p>
						<p>Time:</p>
					</div>
				</Col>
				<Col sm={6}>
					<div className='jobs__cards__card'>
						<h3>stuff</h3>
					</div>
				</Col>
			</Row>
		</Container>
	)
}

export default About

