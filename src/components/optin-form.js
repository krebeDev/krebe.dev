import React, { useState, useEffect } from 'react'
import { validateField } from '../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { buttonStyles } from '../styles/button.module.css'
import * as styles from '../styles/optin-form.module.css'
import { errorHighlight, formGroup } from '../styles/form-controls.module.css'

const OptinForm = (props) => {
	const [email, setEmail] = useState('')
	const [errorFlash, setErrorFlash] = useState(false)

	const handleChange = (event) => {
		setEmail(event.target.value)
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		const isValidEmail = validateField('email', email)
		setErrorFlash((cs) => (isValidEmail ? cs : true))
		if (!isValidEmail) return
		console.log(email)

		// await api call
	}

	useEffect(() => {
		const timerId = setTimeout(() => {
			setErrorFlash(false)
		}, 1000)

		return () => clearTimeout(timerId)
	}, [errorFlash])

	return (
		<div className={styles.optin}>
			<h2 className={styles.formTitle}>Subscribe to the Newsletter</h2>
			<p>Subscribe to get my latest content by email.</p>

			<form onSubmit={handleSubmit} noValidate>
				<div className={formGroup}>
					<FontAwesomeIcon icon={faEnvelope} />
					<input
						onChange={handleChange}
						value={email}
						type='email'
						placeholder='Enter your email address'
						name='email'
						className={`${errorFlash && errorHighlight}`}
					/>
				</div>
				<button type='submit' className={buttonStyles}>
					Subscribe
				</button>
			</form>
			<small className={styles.guarantee}>
				I won't send you spam. Unsubscribe at any time.
			</small>
		</div>
	)
}

export default OptinForm
