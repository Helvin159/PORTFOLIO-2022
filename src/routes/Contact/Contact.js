import React from 'react'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

const Contact = () => {
	const url = window.location.origin

	const successMsg = () => {
		alert('Sent successfully')
	}

	const errorMsg = () => {
		alert('Message failed')
	}

	const onSubmit = (e) => {
		e.preventDefault()

		// console.log(e)

		let payload = { name: 'helvin' }

		axios
			.post(`${url}`, JSON.stringify(payload))
			.then((res) => {
				console.log(res, 'response')
				console.log(JSON.stringify(payload))
				successMsg()
			})
			.catch((er) => {
				console.log(er, 'error')
				console.log(JSON.stringify(payload))
				errorMsg()
			})
	}
	return (
		<Container fluid className='contact'>
			<Container className='mx-auto text-center contact__title'>
				<h1 className='display-1'>Let's chat!</h1>
			</Container>
			<Container className='mx-auto max-w-860 text-center contact__form__container'>
				<form
					method='post'
					name='contact_form'
					encType='multipart/form-data'
					className='contact__form__container__form'>
					<input
						type='text'
						name='name_info'
						id='nameInfo'
						placeholder='Name'
						required
					/>
					<input
						type='email'
						name='email_info'
						id='emailInfo'
						placeholder='Email Address'
						required
					/>
					<input
						type='submit'
						name='submit_info'
						id='submitInfo'
						value='Send'
						onClick={onSubmit}
					/>
				</form>
			</Container>
		</Container>
	)
}

export default Contact

