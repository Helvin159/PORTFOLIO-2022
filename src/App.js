import React, { useCallback, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
// import Header from './components/Header/index'
import Home from './routes/Home/Home'
import About from './routes/About/About'
import Work from './routes/Work/Work'
import Outlet from './routes/Outlet/Outlet'

// Data
import data from './data/data.json'

// Style
import './assets/css/style.css'

const App = () => {
	const [MyData, setMyData] = useState([])

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

	return (
		<Routes>
			<Route path='/' element={<Outlet props={data} />}>
				<Route index element={<Home props={data} />} />
				<Route path='/about' element={<About props={data} />} />
				<Route path='/work' element={<Work props={data} />} />
				<Route path='/contact' element={<About props={data} />} />
				<Route path='/blog' element={<About props={data} />} />
			</Route>
		</Routes>
	)
}

export default App

