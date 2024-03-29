import React, { Fragment, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PortfolioContext } from '../../contexts/portfolioProvider';

const Resume = () => {
	const { portfolio } = useContext(PortfolioContext);

	const {
		name,
		short_about_me,
		skills,
		awards,
		education,
		cont_education,
		employers,
	} = portfolio;

	return (
		<Fragment>
			<style>
				{`
			body{
				background-color:#fff;

			}
		`}
			</style>
			<Container className='resume pb-5' fluid>
				<Container className='text-center py-4 mx-auto resume__header max-w-860'>
					<h1 className='display-1 resume__header__title'>{name}</h1>
					<p>{short_about_me}</p>
				</Container>
				<Row className='mx-auto max-w-1024 resume__jobs max-w-860 px-sm-5'>
					<Col className='resume__jobs__cards' sm={6}>
						<h3 className='resume__jobs__cards__card__title'>
							<strong>Work History</strong>
						</h3>
						{employers.map((i, k) => (
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

						<h3 className='resume__jobs__cards__card__title'>
							<strong>Skills</strong>
						</h3>
						<div className='resume__jobs__cards__card'>
							<ul className='pb-4'>
								{skills.map((i, k) => (
									<li key={k} className='d-inline-block'>
										{i}
										{k + 1 !== skills.length && ', '}
									</li>
								))}
							</ul>
						</div>

						<h3 className='resume__jobs__cards__card__title'>
							<strong>Awards</strong>
						</h3>
						<div className='resume__jobs__cards__card'>
							{awards.map((i, k) => (
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
						<h3 className='resume__jobs__cards__card__title'>
							<strong>Education</strong>
						</h3>
						{education.map((i, k) => (
							<div className='resume__jobs__cards__card' key={k}>
								<div className='pb-4'>
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
							</div>
						))}
						<h3 className='resume__jobs__cards__card__title'>
							<strong>Continuing Education</strong>
						</h3>
						{cont_education.map((i, k) => (
							<div className='resume__jobs__cards__card' key={k}>
								<div className='pb-4'>
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
							</div>
						))}
					</Col>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Resume;
