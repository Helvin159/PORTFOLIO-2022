import React, { Fragment } from 'react'
import { Outlet as Layout } from 'react-router-dom'
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

const Outlet = ({ props }) => {
	return (
		<Fragment>
			<Header props={props} />
			<main>
				<Layout />
			</main>
			<Footer props={props} />
		</Fragment>
	)
}

export default Outlet

