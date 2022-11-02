import { Routes, Route } from 'react-router-dom'
import Header from './routes/Header/Header'
import Home from './routes/Home/Home'
import About from './routes/About/About'
import './assets/css/style.css'
import data from './data/data.json'

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Header props={data} />}>
				<Route index element={<Home props={data} />} />
				<Route path='/about' element={<About props={data} />} />
				<Route path='/portfolio' element={<About props={data} />} />
				<Route path='/contact' element={<About props={data} />} />
				<Route path='/blog' element={<About props={data} />} />
			</Route>
		</Routes>
	)
}

export default App

