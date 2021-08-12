import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faLongArrowAltLeft,
	faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons'
import * as styles from '../styles/recommends.module.css'

const Recommends = ({ next, previous }) => {
	const { pathname } = useLocation()
	const dir = pathname.split('/')[1]

	return (
		<div className={`${styles.recommends} flex-centered`}>
			{previous && (
				<Link
					to={`/${dir}/${previous.node.slug}`}
					className={styles.recommendLink}>
					<FontAwesomeIcon icon={faLongArrowAltLeft} size='xs' />{' '}
					<span className={styles.direction}>Previous</span>
					<span className={styles.title}>
						{previous.node.frontmatter.title}
					</span>
				</Link>
			)}

			{next && (
				<Link to={`/${dir}/${next.node.slug}`} className={styles.recommendLink}>
					<span className={styles.direction}>Up Next </span>{' '}
					<FontAwesomeIcon icon={faLongArrowAltRight} size='xs' />
					<span className={styles.title}>{next.node.frontmatter.title}</span>
				</Link>
			)}
		</div>
	)
}

export default Recommends
