import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Hero = ({ props }) => {
	return (
		<Container
			fluid
			className={`${props.first_name}-${props.last_name}-Portfolio hero`}>
			<Container className='mx-auto'>
				<Container className='text-center hero__title'>
					<h1 className='display-1'>{props.position}</h1>
				</Container>
				<Row>
					<Col sm={5}>
						{props.short_about_me !== '' && (
							<p className='hero__short__text'>{props.short_about_me}</p>
						)}
					</Col>
					<Col sm={5}>
						{props.short_about_me !== '' && (
							<p className='hero__short__text'>{props.what_im_looking_for}</p>
						)}
					</Col>
					<Col sm={2} className='hero__get__in__touch'>
						<div>
							{props.email_addy !== '' && (
								<a href={`mailto:${props.email_addy}`}>GET IN TOUCH!</a>
							)}
						</div>
					</Col>
				</Row>
			</Container>

			<div className='hero__curved__bg text-center'>
				<div className='hero__curved__bg__touts hero__curved__bg__touts__one'>
					<p>
						<strong>ReactJs</strong>
						<br />
						<span>Front end development</span>
					</p>
				</div>
				<div className='hero__curved__bg__touts hero__curved__bg__touts__two'>
					<p>
						<strong>VueJS</strong>
						<br />
						Experience with the latest in VueJs and Vue3
					</p>
				</div>
				<div className='hero__curved__bg__touts hero__curved__bg__touts__three'>
					<p>
						<strong>Jira</strong> <br />
						Agile team work flow experience
					</p>
				</div>
				<div className='hero__curved__bg__touts hero__curved__bg__touts__four'>
					<p>SASS</p>
				</div>
				<div className='hero__curved__bg__touts hero__curved__bg__touts__five'>
					<p>Class & Functional Components</p>
				</div>

				<p className='hero__curved__bg__touts__six'>
					Class & Functional Components
				</p>
			</div>
		</Container>
	)
}

export default Hero

