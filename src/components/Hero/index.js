import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import heroImg from '../../assets/images/hero/Helvin_profile_bw.svg'

const Hero = ({ props }) => {
	return (
		<Container
			fluid
			className={`${props.first_name}-${props.last_name}-Portfolio hero`}>
			<Container className='mx-auto max-w-1024'>
				<Container className='hero__title mx-0 px-0'>
					<h1 className=''>{props.position}</h1>
				</Container>
				<Row>
					<Col sm={10}>
						{props.short_about_me !== '' && (
							<p className='hero__short__text'>{props.short_about_me}</p>
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

				<img src={heroImg} alt='hero img' className='img-responsive' />
				<div className='hero__curved__bg__touts hero__curved__bg__touts__four'>
					<p>
						<strong>SASS</strong>
						<br />
						Great clean code!
					</p>
				</div>
				<div className='hero__curved__bg__touts hero__curved__bg__touts__five'>
					<p>
						<strong>Class & Functional Components</strong>
						<br />
						Flexible work for what is needed
					</p>
				</div>

				<div className='hero__curved__bg__touts__six'>
					<p>
						<strong>GIT</strong>
						<br />
						Work with a team through version control
					</p>
				</div>
			</div>
		</Container>
	)
}

export default Hero

