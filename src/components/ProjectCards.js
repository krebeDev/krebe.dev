import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import * as styles from '../styles/project-cards.module.css'

const ProjectCards = ({ projects }) => {
	return (
		<ul className={`flex-centered ${styles.projectList}`}>
			{projects.map(({ frontmatter, id, slug }) => (
				<li key={id} className={styles.projectCard}>
					<Link to={`/${slug}`}>
						<div>
							<h2 className={styles.projectName}>{frontmatter.title}</h2>
							<span role='presentation' className={styles.barIcon}></span>
							<div className={styles.projectSummary}>
								<ul className={styles.tagList}>
									{frontmatter.tags.map((tag) => (
										<li className={styles.tag} key={id + tag}>
											{tag}
										</li>
									))}
								</ul>
								<p className={styles.more}>more...</p>
							</div>
							<GatsbyImage
								image={getImage(frontmatter.featuredImage)}
								alt={frontmatter.title}
							/>
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default ProjectCards
