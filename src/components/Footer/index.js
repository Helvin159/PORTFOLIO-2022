import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

// Temporary
import { nav_links } from '../../data/data';
import { PortfolioContext } from '../../contexts/portfolioProvider';

const Footer = () => {
	const { portfolio } = useContext(PortfolioContext);
	const { social_media } = portfolio;

	return (
		<footer className='footer py-3'>
			<Container className='text-center mx-auto max-w-1024 footer__links py-2'>
				{nav_links.map((e, i) => (
					<Link
						to={e.url}
						className='px-3 egg-shell-font footer__links__link'
						key={`${i}-${e.link_text}`}>
						{e.link_text}
					</Link>
				))}
			</Container>
			<Container className='text-center mx-auto max-w-1024 footer__social-links py-2'>
				{social_media.map((i, k) => (
					<a
						href={i.acct_url}
						className='px-3 egg-shell-font footer__social-links__link'
						target='_blank'
						rel='noreferrer'
						key={`${k}-${i.platform}`}>
						{i.platform}
					</a>
				))}
			</Container>
		</footer>
	);
};

export default Footer;
