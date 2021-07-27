import React from 'react'
import { Link } from 'gatsby'
import * as styles from './../styles/nav.module.css'
import Logo from './Logo'

const NavBar = (props) => {
	const navItems = [
		{
			title: 'About',
			slug: '/about',
		},
		{
			title: 'Projects',
			slug: '/projects',
		},
		{
			title: 'Blog',
			slug: '/blog',
		},
	]
	return (
		<nav className={styles.navBar}>
			<Link to='/'>
				<Logo width='132.98' height='20.59' />
			</Link>

			<ul className={styles.navMenu}>
				{navItems.map(({ title, slug }) => (
					<li key={title} className={styles.navItem}>
						<Link
							to={slug}
							className={styles.navLink}
							activeClassName={styles.activeLink}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default NavBar
