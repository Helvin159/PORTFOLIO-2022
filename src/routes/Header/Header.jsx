import React, { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Header = ({ props, name }) => {
	return (
		<Fragment>
			<header>
				<Row>
					<Col sm={2} className='text-center'>
						<div>
							<p className='didot'>{name}</p>
						</div>
					</Col>
					<Col sm={10} className='text-right'>
						<ul>
							{props.map((e, i) => (
								<li key={i} className='px-2'>
									<Link to={e.url}>{e.link_text}</Link>
								</li>
							))}
						</ul>
					</Col>
				</Row>
			</header>
			<main>
				<Outlet />
			</main>
		</Fragment>
	)
}

export default Header

