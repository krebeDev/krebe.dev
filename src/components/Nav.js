import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLongArrowAltRight,
	faSquareFull,
} from '@fortawesome/free-solid-svg-icons'
import Logo from './Logo'
import HamburgerIcon from './Hamburger'
import CloseIcon from './CloseIcon'
import * as styles from '../styles/nav.module.css'

const NavBar = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const navItems = [
		{
			title: 'About',
			slug: '/about',
		},
		{
			title: 'Projects',
			slug: '/portfolio',
		},
		{
			title: 'Blog',
			slug: '/blog',
		},
		{
			title: 'Contact',
			slug: '/contact',
		},
	]

	const toggleMenu = () => {
		setIsOpen((currentState) => !currentState)
	}

	const { pathname } = useLocation()

	return (
		<header className={styles.navBar}>
			<nav className={`container flex-centered`}>
				<Link
					to='/'
					title='Back to home'
					aria-label='krebeDev logo'
					className={styles.logoAnchor}>
					<Logo />
				</Link>

				<button
					className={styles.toggleButton}
					onClick={toggleMenu}
					title='Menu'
					aria-label='toggle button'>
					{isOpen ? (
						<span className={styles.closeIconBox}>
							<CloseIcon />
						</span>
					) : (
						<span className={styles.hamburgerIconBox}>
							<HamburgerIcon />
						</span>
					)}
				</button>

				<ul className={`${styles.navMenu} ${isOpen && styles.expand}`}>
					{navItems.map(({ title, slug }) => (
						<li key={title} className={styles.navItem}>
							<Link
								onClick={() => setIsOpen(false)}
								to={slug}
								className={`${styles.navLink} flex-centered`}>
								{title}
								<span role='presentation'>
									{pathname === slug ? (
										<FontAwesomeIcon icon={faSquareFull} size='xs' />
									) : (
										<FontAwesomeIcon icon={faLongArrowAltRight} size='lg' />
									)}
								</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	)
}

export default NavBar
