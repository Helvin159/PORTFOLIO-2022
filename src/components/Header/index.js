import React, { Fragment, useContext } from 'react';
import { PortfolioContext } from '../../contexts/portfolioProvider';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Temporary
import { nav_links } from '../../data/data';

const Header = () => {
	const { portfolio } = useContext(PortfolioContext);

	const { nick_name } = portfolio;

	return (
		<Fragment>
			<header className='nav__bar'>
				<Row className='mx-auto my-0 py-3'>
					<Col sm={6} className='text-center'>
						<div>
							<p className='didot m-0'>
								<Link to='/' key={`0-${nick_name}`} className='display-6'>
									{nick_name}
								</Link>
							</p>
						</div>
					</Col>
					<Col sm={6} className='text-center py-3'>
						<ul>
							{nav_links.map(
								(e, i) =>
									e.url !== '/' && (
										<li key={`${i}-${e.link_text}`} className='px-3'>
											<Link to={e.url}>{e.link_text}</Link>
										</li>
									)
							)}
						</ul>
					</Col>
				</Row>
			</header>
		</Fragment>
	);
};

export default Header;
