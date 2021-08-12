import React from 'react'
import NavBar from './Nav'
import FooterBar from './footer'
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
