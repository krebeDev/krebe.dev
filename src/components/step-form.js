import React from 'react';
import {buttonStyles} from '../styles/button.module.css'

const StepForm = ({children, ...props}) => {
	const fieldsArray = React.Children.toArray(children)
	const currentField = fieldsArray[props.step]
	const isLastStep = props.step === fieldsArray.length - 1

	const stepHandler = () => {
		if (isLastStep) return
		props.nextStepHandler()
	}
	
	return (
		<form onSubmit={props.handleSubmit} noValidate>
		{currentField}

		{!isLastStep && <button 
			onClick={stepHandler}
			type='button' 
			className={buttonStyles} 
			>
			Next
		</button>}

		{isLastStep && <button 
			type='submit' 
			className={buttonStyles}>
			Send Message
			</button>}
		</form>
	)
}

export default StepForm