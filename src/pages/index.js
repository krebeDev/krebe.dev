import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from './../styles/homepage.module.css'

const IndexPage = ({ data }) => {
	const { name, jobTitle } = data.site.siteMetadata.author
	return (
		<Layout>
			<Helmet title={`${jobTitle} | ${name}`} />
			<header className={styles.header}>
				<h1 className={styles.headerTitle}>
					Hi, my name is Solomon E
					<span className={styles.highlight}>krebe</span>. <br /> I'm an avid
					learner and Frontend <span className={styles.highlight}>Dev</span>
					eloper
				</h1>
				<p className={styles.headerIntro}>
					I build elegant and effective web / mobile apps that deliver great
					user experiences.
				</p>
				<p className={styles.headerIntro}>
					I believe in an accessible web and digital ecosystem and adapt my
					craft to meet these salient needs.
				</p>
			</header>
		</Layout>
	)
}

export default IndexPage

export const query = graphql`
	query HomePageQuery {
		site {
			siteMetadata {
				author {
					jobTitle
					name
				}
			}
		}
	}
`
