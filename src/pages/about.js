import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Layout from '../components/Layout'
import * as styles from './../styles/about.module.css'
import { StaticImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx' 
import Cta from './../components/cta';

const About = ({ data }) => {
	const {siteMetadata} = data.site
	return (
		<Layout>
			<Helmet title={`About | ${siteMetadata.title}`} />
			<section>
				<div className={`container`}>
				<h1 className={styles.pageTitle}>{data.mdx.frontmatter.title}</h1>
				<article className={styles.details}>
					<div className={styles.copy}>
					<MDXRenderer>
						{data.mdx.body}
					</MDXRenderer>
					</div>
					<div className={styles.avatarBox}>
					<StaticImage src='./../images/me.jpg' width={350} height={350} placeholder='blurred' className={styles.photo} alt='Solomon Ekrebe - krebeDev' />
					</div>
				</article>
				<a 
					className={styles.downloadLink}
					href='#my-cv' download>
					<span>
						<FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} />
					</span>
					Download CV</a>
				</div>
			</section> 
				<small className={styles.stars} role='presentation' aria-label='section break'>
				* * * *  * * * *  * * * *  * * * * </small>
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
		mdx(id: {eq: "1b4263b3-90e6-5709-bb9b-57998a83dcb2"}) {
			frontmatter {
				title
			}
			body
		}
	}
`
