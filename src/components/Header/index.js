import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { signInWithGooglePopup } from '../../lib/firebase/firebase'

const Header = ({ props }) => {
	const logGoogleUser = async () => {
		const res = await signInWithGooglePopup()
		console.log(res)
	}
	return (
		<Fragment>
			<header className='nav__bar'>
				<Row className='mx-auto my-0 py-3'>
					<Col sm={6} className='text-center'>
						<div>
							<p className='didot m-0'>
								{props.nav_links.map(
									(e, i) =>
										e.url === '/' && (
											<Link
												to='/'
												key={`${i}-${props.nick_name}`}
												className='display-6'>
												{props.nick_name}
											</Link>
										)
								)}
							</p>
						</div>
					</Col>
					<Col sm={6} className='text-center py-3'>
						<ul>
							{props.nav_links.map(
								(e, i) =>
									e.url !== '/' && (
										<li key={`${i}-${e.link_text}`} className='px-3'>
											<Link to={e.url}>{e.link_text}</Link>
										</li>
									)
							)}
							<li>
								<button onClick={logGoogleUser}>Login</button>
							</li>
						</ul>
					</Col>
				</Row>
			</header>
		</Fragment>
	)
}

export default Header

