import React from 'react'
import Container from 'react-bootstrap/Container'
import ContactForm from '../../components/ContactForm'

const Contact = () => {
	return (
		<Container fluid className='contact'>
			<Container className='mx-auto text-center contact__title'>
				<h1 className='display-1 egg-shell-font'>Let's chat!</h1>
			</Container>
			<ContactForm />
		</Container>
	)
}

export default Contact

