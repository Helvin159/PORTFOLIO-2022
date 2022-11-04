import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Resume = ({ props }) => {
	return (
		<Fragment>
			<style>
				{`
			body{
				background-color:#fff;

			}
		`}
			</style>
			<Container className=' resume' fluid>
				<Container className='text-center py-4 mx-auto resume__header max-w-860'>
					<h1 className='display-1 resume__header__title'>{props.name}</h1>
					<p>{props.short_about_me}</p>
				</Container>
				<Row className='mx-auto max-w-1024 resume__jobs max-w-860'>
					<Col className='resume__jobs__cards' sm={6}>
						<h3>
							<strong>Work History</strong>
						</h3>
						{props.jobs.map((i, k) => (
							<div className='resume__jobs__cards__card pb-4' key={k}>
								<h4>{i.company}</h4>
								<p className='mb-2'>
									<strong>Position:</strong>
									<br /> {i.position}
								</p>
								<p className='mb-2'>
									<strong>Job Description:</strong>
									<br />{' '}
									<span dangerouslySetInnerHTML={{ __html: i.summary }}></span>
								</p>
								<p className='mb-2'>
									<strong>Time:</strong>
									<br />{' '}
									{i.date_ended !== 'N/A' ? i.total_time : 'Presently employed'}
								</p>
							</div>
						))}

						<h3>
							<strong>Skills</strong>
						</h3>
						<div className='resume__jobs__cards__card'>
							<ul className='pb-4'>
								{props.skills.map((i, k) => (
									<li key={k} className='d-inline-block'>
										{i}
									</li>
								))}
							</ul>
						</div>

						<h3>
							<strong>Awards</strong>
						</h3>
						<div className='resume__jobs__cards__card'>
							{props.awards.map((i, k) => (
								<div key={k} className='pb-4'>
									<h4>
										<strong> {i.award}</strong>
									</h4>
									<p className='mb-2'>
										<strong>Presenter:</strong> {i.presenter}
									</p>
									<p className='mb-2'>
										<strong>Summary:</strong>
										<br /> {i.summary}
									</p>
								</div>
							))}
						</div>
					</Col>
					<Col className='resume__jobs__cards' sm={6}>
						<div className='resume__jobs__cards__card'>
							<h3>
								<strong>Education</strong>
							</h3>
							{props.education.map((i, k) => (
								<div className='pb-4' key={k}>
									<h4>{i.school}</h4>
									<p className='mb-0'>
										<strong>Field of Study:</strong> {i.field_of_study}
									</p>
									<p className='mb-0'>
										<strong>School Location:</strong> {i.school_location}
									</p>
									{i.grad_date !== '' && (
										<p className='mb-0'>
											<strong>Graduation Date:</strong> {i.grad_date}
										</p>
									)}
								</div>
							))}
						</div>
						<div className='resume__jobs__cards__card'>
							<h3>
								<strong>Continuing Education</strong>
							</h3>
							{props.cont_education.map((i, k) => (
								<div className='pb-4' key={k}>
									<h4>{i.school}</h4>
									<p className='mb-0'>
										<strong>Field of Study:</strong> {i.field_of_study}
									</p>
									<p className='mb-0'>
										<strong>School Location:</strong> {i.school_location}
									</p>
									{i.grad_date !== '' && (
										<p className='mb-0'>
											<strong>Graduation Date:</strong> {i.grad_date}
										</p>
									)}
								</div>
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</Fragment>
	)
}

export default Resume

