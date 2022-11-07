import React, { useCallback, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header/index'
import Home from './routes/Home/Home'
import About from './routes/About/About'
import Work from './routes/Work/Work'
import Outlet from './routes/Outlet/Outlet'
import ScrollToTop from './lib/ScrollToTop'

// Data
// import data from './data/data.json'

// Style
import './assets/css/style.css'
import Contact from './routes/Contact/Contact'

const App = () => {
	const [MyData, setMyData] = useState(null)

	const fetchedData = useCallback(() => {
		fetch('data.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then((res) => {
				console.log(res, 'res')
				return res.json()
			})
			.then((myJson) => {
				setMyData(myJson)
				// mydata.push(myJson)
			})
	}, [setMyData])

	useEffect(() => {
		fetchedData()
	}, [fetchedData])

	// console.log(MyData, 'mydata')

	if (MyData) {
		return (
			<ScrollToTop>
				<Routes>
					<Route path='/' element={<Outlet props={MyData} />}>
						<Route index element={<Home props={MyData} />} />
						<Route path='/about' element={<About props={MyData} />} />
						<Route path='/work' element={<Work props={MyData} />} />
						<Route path='/contact' element={<Contact props={MyData} />} />
					</Route>
				</Routes>
			</ScrollToTop>
		)
	}
}

export default App

