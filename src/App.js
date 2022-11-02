import { Routes, Route } from 'react-router-dom'
import Header from './routes/Header/Header'
import Home from './routes/Home/Home'
import About from './routes/About/About'
import './assets/css/style.css'

const App = () => {
	const data = {
		name: 'Helvin Rymer',
		first_name: 'Helvin',
		last_name: 'Rymer',
		prefix: 'Mr.',
		email_addy: 'helvin159@gmail.com',
		position: 'Front End Developer',
		specialty: 'ReactJS',
		short_about_me:
			"I am a web developer with nearly 4 years of experience developing high quality user interfaces. I've worked on testing, debuggin and researching new and current technologies and trends. I have a proven ability to build dynamic themes, write re-usable code and pay great attention to detail.",
		short_description: '',
		what_im_looking_for:
			"I am a web developer with nearly 4 years of experience developing high quality user interfaces. I've worked on testing, debuggin and researching new and current technologies and trends. I have a proven ability to build dynamic themes, write re-usable code and pay great attention to detail.",
		lang: [
			{ lng: 'HTML', length_of_experience: '', expertise_level: '' },
			{ lng: 'CSS', length_of_experience: '', expertise_level: '' },
			{ lng: 'Sass', length_of_experience: '', expertise_level: '' },
			{ lng: 'Javascript', length_of_experience: '', expertise_level: '' },
			{ lng: 'ReactJs', length_of_experience: '', expertise_level: '' },
			{ lng: 'VueJs', length_of_experience: '', expertise_level: '' },
			{ lng: 'NodeJs', length_of_experience: '', expertise_level: '' },
			{ lng: 'Redux', length_of_experience: '', expertise_level: '' },
			{ lng: 'Php', length_of_experience: '', expertise_level: '' },
		],
		tools: [
			'VSCode',
			'Github',
			'Bitbucket',
			'Photoshop',
			'Jira',
			'Slack',
			'DevOps',
		],
		cms: ['Sitecore', 'Wordpress', 'BigCommerce'],
		nav_links: [
			{ url: '/', link_text: 'Home' },
			{ url: '/portfolio', link_text: 'Work' },
			{ url: '/about', link_text: 'About' },
		],
		social_media: [
			{ platform: 'Instagram', user_name: '', acctUrl: '' },
			{
				platform: 'LinkedIn',
				user_name: '',
				acctUrl: 'www.linkedin.com/in/helvinrymer',
			},
			{ platform: 'Twitter', user_name: '', acctUrl: '' },
		],
		projects: [
			{
				projectName: 'RollByADP',
				workDone: '',
				languages: '',
				url: 'https://rollbyadp.com',
			},
			{
				projectName: 'Blog by RollByADP',
				workDone: '',
				languages: '',
				url: 'https://blog.rollbyadp.com',
			},
			{
				projectName: 'Criterion Ticketing',
				workDone: '',
				languages: '',
				url: 'https://criterionticketing.com/',
			},
		],
	}

	return (
		<Routes>
			<Route
				path='/'
				element={<Header props={data.nav_links} name={data.name} />}>
				<Route index element={<Home props={data} />} />
				<Route path='/about' element={<About props={data} />} />
				<Route path='/portfolio' element={<About props={data} />} />
			</Route>
		</Routes>
	)
}

export default App

