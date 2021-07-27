import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const Seo = () => {
	const { pathname } = useLocation()
	const siteQuery = useStaticQuery(graphql`
		query siteMeta {
			site {
				siteMetadata {
					title
					description
					siteUrl
					twitterUserName
					image
				}
			}
		}
	`)
	const { title, description, siteUrl, twitterUserName, image } =
		siteQuery.site.siteMetadata

	return (
		<Helmet>
			<meta name='description' content={description} />
			<meta name='image' content={image} />
			<meta property='og:url' content={`${siteUrl}${pathname}`} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
			<meta property='og:image' content={image} />

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={title} />
			<meta name='twitter:creator' content={twitterUserName} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={image} />
			<link rel='icon' href='./../images/fav.png' />
		</Helmet>
	)
}

export default Seo
