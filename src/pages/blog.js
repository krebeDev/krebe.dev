import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'

const BlogPage = ({ data }) => {
	return (
		<Layout>
			<Helmet title={`Blog | ${data.site.siteMetadata.title}`} />
			<header>
				<h1>Blog </h1>
			</header>
		</Layout>
	)
}

export const query = graphql`
	query BlogPageQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`

export default BlogPage
