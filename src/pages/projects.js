import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from './../components/Layout'

const Projects = ({ data }) => {
	return (
		<Layout>
			<Helmet title={`Projects | ${data.site.siteMetadata.title}`} />
			<header>
				<h1>Projects</h1>
			</header>
		</Layout>
	)
}

export default Projects

export const query = graphql`
	query ProjectsPageQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
