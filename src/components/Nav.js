import React, {useState} from 'react'
import { Link } from 'gatsby'
import {useLocation} from '@reach/router'
import * as styles from './../styles/nav.module.css'
import Logo from './logo'
import HamburgerIcon from './hamburger'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faSquareFull } from '@fortawesome/free-solid-svg-icons'
import CloseIcon from './close-icon'

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
			slug: '/contact'
		}
	]

	const toggleMenu = () => {
		setIsOpen((currentState) => !currentState)
	}

	const {pathname} = useLocation()

	return (
		<header className={styles.navBar}>
			<nav className={`container flex-centered`}>
			<Link to='/' className={styles.logoAnchor}>
				<Logo />
			</Link>

			<button className={styles.toggleButton}
				onClick={toggleMenu}>
				{isOpen ? <span className={styles.closeIcon}>	
					<CloseIcon />
				</span> : <span>
					<HamburgerIcon />
				</span>}
			</button>

			<ul className={`${styles.navMenu} ${isOpen && styles.expand}`}>
				{navItems.map(({ title, slug }) => (
					<li key={title} className={styles.navItem}>
						<Link
							onClick={() => setIsOpen(false)}
							to={slug}
							className={`${styles.navLink} flex-centered`}
							activeClassName={styles.activeLink}>
							{title}
							{pathname === slug ? 
									<FontAwesomeIcon icon={faSquareFull} size='xs' /> :
									<FontAwesomeIcon icon={faLongArrowAltRight} size='lg' />
								}							
						</Link>
					</li>
				))}
			</ul>
		</nav>
		</header>
	)
}

export default NavBar
