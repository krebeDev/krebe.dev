import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const About = ({ data }) => {
	return (
		<Layout>
			<Helmet title={`About | ${data.site.siteMetadata.title}`} />
			<header>
				<p>Amazing stuff about me</p>
			</header>
		</Layout>
	)
}

export default About

export const query = graphql`
	query AboutPageQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
