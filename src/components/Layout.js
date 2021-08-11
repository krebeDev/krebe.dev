import React from 'react'
import NavBar from './nav'
import FooterBar from './footer'
import Seo from './seo'
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
