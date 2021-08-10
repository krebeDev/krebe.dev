import React, {useEffect, useState} from 'react'
import NavBar from './nav'
import FooterBar from './footer'
import Seo from './seo'
import './../styles/global.css'

const Layout = ({ children }) => {
	const [animate, setAnimate] = useState(true)
	useEffect(() => {
		setAnimate(false)
	}, [])
	return (
		<>
			<Seo />
			<NavBar />
			<main>{children}</main>
			<FooterBar />
			{animate && <div className={`animate`} />}
		</>
	)
}

export default Layout
