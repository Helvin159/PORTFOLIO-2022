import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Projects extends Component {
	render() {
		const { projects } = this.props.props

		return (
			<Container className='mx-auto'>
				<Row className='mx-auto'>
					{projects.map((i, k) => (
						<Col sm={6} key={k}>
							<h3>{i.projectName}</h3>
							{i.workDone !== '' && <p>{i.workDone}</p>}
							<a href={i.url} target='_blank' rel='noreferrer'>
								{i.projectName} URL
							</a>
						</Col>
					))}
				</Row>
			</Container>
		)
	}
}

export default Projects

