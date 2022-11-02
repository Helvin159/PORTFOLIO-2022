import React from 'react'
import Hero from '../../components/Hero'
import Projects from '../../components/Projects'

const Home = ({ props }) => {
	return (
		<div>
			<Hero props={props} />
			<Projects props={props} />
		</div>
	)
}

export default Home

