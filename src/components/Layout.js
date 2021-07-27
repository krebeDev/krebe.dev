import React from 'react'
import NavBar from './Nav'
import FooterBar from './Footer'
import Seo from './Seo'
import './../styles/global.css'

const Layout = ({ children }) => {
	return (
		<>
			<Seo />
			<NavBar />
			<main>{children}</main>
			<FooterBar />
		</>
	)
}

export default Layout
