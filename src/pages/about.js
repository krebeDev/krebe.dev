import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Cta from '../components/Cta'
import * as styles from '../styles/about.module.css'

const About = ({ data }) => {
	const { siteMetadata } = data.site
	return (
		<Layout>
			<Helmet title={`About | ${siteMetadata.title}`} />
			<section>
				<div className={`container`}>
					<h1 className={styles.pageTitle}>{data.mdx.frontmatter.title}</h1>
					<article className={styles.details}>
						<div>
							<MDXRenderer>{data.mdx.body}</MDXRenderer>
						</div>
					</article>
					<a className={styles.downloadLink} href='#my-cv' download>
						<span>
							<FontAwesomeIcon
								icon={faDownload}
								className={styles.downloadIcon}
							/>
						</span>
						Download CV
					</a>
				</div>
			</section>
			<Cta />
		</Layout>
	)
}

export default About

export const query = graphql`
	query AboutPageQuery {
		site {
			siteMetadata {
				author {
					name
					jobTitle
				}
				title
			}
		}
		mdx(id: { eq: "96fd4a49-d583-561d-b82f-87b4409f1f7c" }) {
			frontmatter {
				title
			}
			body
		}
	}
`
