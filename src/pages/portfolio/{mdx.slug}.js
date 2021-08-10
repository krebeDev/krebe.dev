import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Layout from '../../components/layout'
import * as styles from './../../styles/project-template.module.css'

const Project = ({ data }) => {
	const { title, overview, liveUrl, gitRepo, featuredImage } =
		data.mdx.frontmatter
	const image = getImage(featuredImage)

	return (
		<Layout>
			<Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
			<section>
				<div className={`container`}>
					<div className={styles.inner}>
						<div>
							<h1>{title}</h1>
							<p>{overview}</p>
							<div className={styles.projectLinks}>
								{liveUrl && (
									<a
										href={liveUrl}
										target='_blank'
										rel='noopenner noreferrer'
										className={styles.projectLink}>
										<span className={styles.linkIcon}>
											<FontAwesomeIcon icon={faExternalLinkAlt} />
										</span>
										Live Site
									</a>
								)}
								{gitRepo && (
									<a
										href={gitRepo}
										target='_blank'
										rel='noopenner noreferrer'
										className={styles.projectLink}>
										<span className={styles.linkIcon}>
											<FontAwesomeIcon icon={faExternalLinkAlt} />
										</span>
										Source Code
									</a>
								)}
							</div>
						</div>
						<div>
							<GatsbyImage image={image} alt={title} />
						</div>
						<article className={styles.projectDetails}>
							<MDXRenderer>{data.mdx.body}</MDXRenderer>
						</article>
					</div>
				</div>
			</section>
		</Layout>
	)
}

export default Project

export const query = graphql`
	query ($id: String) {
		mdx(id: { eq: $id }) {
			frontmatter {
				title
				overview
				liveUrl
				gitRepo
				featuredImage {
					childImageSharp {
						gatsbyImageData(width: 1024)
					}
				}
			}
			body
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`
