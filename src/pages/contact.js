import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faUserAlt,
	faEnvelope,
	faEdit,
} from '@fortawesome/free-solid-svg-icons'
import {
	faGithub,
	faTwitter,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/Layout'
import * as styles from '../styles/contact.module.css'
import * as formStyles from '../styles/form-controls.module.css'
import StepForm from '../components/step-form'
import { validateField, toTitleCase } from '../utils'

const Contact = ({ data }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [step, setStep] = useState(0)
	const [errorFlash, setErrorFlash] = useState(false)
	const formFields = Object.keys(formData)

	const handleChange = (event) => {
		const { name, value } = event.target
		const formDataClone = { ...formData }
		formDataClone[name] = value
		setFormData(formDataClone)
	}

	const handleValidation = () => {
		const field = formFields[step]
		const value = formData[field]
		const isValid = validateField(field, value)
		setErrorFlash((currentState) => (!isValid ? true : currentState))
		return isValid
	}

	const nextStepHandler = () => {
		const isValidField = handleValidation()
		if (!isValidField) return
		setStep((currentStep) => currentStep + 1)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const isValidField = handleValidation()
		if (!isValidField) return
		// make api call
	}

	const socialIcons = {
		twitter: <FontAwesomeIcon icon={faTwitter} />,
		linkedIn: <FontAwesomeIcon icon={faLinkedinIn} />,
		github: <FontAwesomeIcon icon={faGithub} />,
	}

	useEffect(() => {
		const timerId = setTimeout(() => {
			setErrorFlash(false)
		}, 1000)

		return () => clearTimeout(timerId)
	}, [errorFlash])

	const { siteMetadata } = data.site

	return (
		<Layout>
			<Helmet title={`Contact | ${siteMetadata.title}`} />
			<section>
				<div className={`container`}>
					<h1>Get in touch</h1>
					<div className={`${styles.contactInner}`}>
						<p>
							If you have any queries for me or want to discuss an excellent
							project or collaboration please{' '}
							<a href='mailto:solomon@krebe.dev' className={styles.emailLink}>
								send me an email
							</a>{' '}
							or drop a note in the form below.
						</p>

						<div className={styles.userEntries}>
							{formData.name && step > 0 && (
								<button
									onClick={() => setStep(0)}
									className={styles.editButton}>
									<FontAwesomeIcon icon={faUserAlt} />
									<span className={styles.fieldValue}>{formData.name}</span>
								</button>
							)}
							{formData.email && step > 1 && (
								<button
									onClick={() => setStep(1)}
									className={styles.editButton}>
									<FontAwesomeIcon icon={faEnvelope} />
									<span className={styles.fieldValue}>{formData.email}</span>
								</button>
							)}
						</div>
						<StepForm {...{ step, nextStepHandler, handleSubmit }}>
							<div className={formStyles.formGroup}>
								<label htmlFor='name'>Name</label>
								<FontAwesomeIcon icon={faUserAlt} />
								<input
									onChange={handleChange}
									value={formData.name}
									type='text'
									name='name'
									id='name'
									placeholder='Enter your name'
									className={`${errorFlash && formStyles.errorHighlight}`}
								/>
							</div>

							<div className={formStyles.formGroup}>
								<label htmlFor='email'>Email Address</label>
								<FontAwesomeIcon icon={faEnvelope} />
								<input
									onChange={handleChange}
									value={formData.email}
									type='email'
									placeholder='Enter your email address'
									name='email'
									id='email'
									className={`${errorFlash && formStyles.errorHighlight}`}
								/>
							</div>

							<div className={`${formStyles.formGroup} ${styles.messageGroup}`}>
								<label htmlFor='message'>Message</label>
								<FontAwesomeIcon icon={faEdit} className={styles.editIcon} />
								<textarea
									onChange={handleChange}
									name='message'
									id='message'
									value={formData.message}
									placeholder='Enter your message'
									rows={5}
									className={`${errorFlash && formStyles.errorHighlight}`}
								/>
							</div>
						</StepForm>

						<div className={styles.socials}>
							<h2>Let's get social</h2>
							<p>Connect with me on social media.</p>
							<ul className={styles.profileLinks}>
								{Object.entries(siteMetadata.author.socialProfiles).map(
									([key, value]) => (
										<li key={key} className={styles.profile}>
											<a
												href={value}
												target='_blank'
												rel='noopener noreferrer'
												className={`${styles.profileLink} ${styles[key]}`}>
												<span>{socialIcons[key]}</span>
												<span className={styles.networkName}>
													{toTitleCase(key)}
												</span>
											</a>
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Contact

export const query = graphql`
	query ContactPageQuery {
		site {
			siteMetadata {
				title
				author {
					socialProfiles {
						twitter
						linkedIn
						github
					}
				}
			}
		}
	}
`
