import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'

const Contact = ({ data }) => {
	return (
		<Layout>
			<Helmet title={`Contact | ${data.site.siteMetadata.title}`} />
			<header>
				<h1>Contact Me</h1>
			</header>
		</Layout>
	)
}

export default Contact

export const query = graphql`
	query ContactPageQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
