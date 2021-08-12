import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import { Helmet } from 'react-helmet'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import OptinForm from '../components/OptinForm'
import AuthorCard from '../components/AuthorCard'
import Recommends from '../components/Recommends'
import * as styles from '../styles/blog-post-template.module.css'

const BlogPost = ({ data, pageContext }) => {
	const { date, tags, title, author } = data.mdx.frontmatter
	const { next, previous } = pageContext

	return (
		<Layout>
			<Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
			<section className={`container`}>
				<div className={styles.postHeader}>
					<h1>{title}</h1>
					<p>
						By{' '}
						<Link to={'/about'} className={styles.authorAnchor}>
							{author}
						</Link>{' '}
						on {date} -{' '}
						<span className={styles.timeToRead}>
							{data.mdx.timeToRead} min read
						</span>
					</p>
					<ul className={styles.tagList}>
						{tags.map((tag, index) => (
							<li key={tag + index} className={styles.postTag}>
								<button className={styles.postTagButton}>{tag}</button>
							</li>
						))}
					</ul>
				</div>
				<div className={styles.postContent}>
					<article className={styles.postBody}>
						<MDXRenderer>{data.mdx.body}</MDXRenderer>
					</article>
					<AuthorCard author={data.site.siteMetadata.author} />
					<OptinForm />
					<Recommends {...{ next, previous }} />
				</div>
			</section>
		</Layout>
	)
}

export default BlogPost

export const query = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			body
			timeToRead
			frontmatter {
				date(formatString: "MMMM D, YYYY")
				category
				tags
				title
				author
			}
		}
		site {
			siteMetadata {
				title
				author {
					name
					jobTitle
					bio
				}
			}
		}
	}
`
