import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const Footer = ({ props }) => {
	return (
		<footer className='footer py-3'>
			<Container className='text-center mx-auto max-w-1024 footer__links py-2'>
				{props.nav_links.map((e, i) => (
					<Link to={e.url} className='px-3 egg-shell-font footer__links__link'>
						{e.link_text}
					</Link>
				))}
			</Container>
			<Container className='text-center mx-auto max-w-1024 footer__social-links py-2'>
				<a
					href='https://www.linkedin.com/in/helvinrymer/'
					className='px-3 egg-shell-font footer__social-links__link'
					target='_blank'
					rel='noreferrer'>
					LinkedIn
				</a>
				<a
					href='https://www.instagram.com/_mrrymer/'
					className='px-3 egg-shell-font footer__social-links__link'
					target='_blank'
					rel='noreferrer'>
					Instagram
				</a>
			</Container>
		</footer>
	)
}

export default Footer

