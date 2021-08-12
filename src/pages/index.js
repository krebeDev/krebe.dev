import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import * as styles from './../styles/index.module.css'
import Button from './../components/button'
import { StaticImage } from 'gatsby-plugin-image'
import ProjectCards from '../components/project-cards'
import BlogCards from '../components/blog-cards'
import Cta from '../components/cta'

const HomePage = ({ data }) => {
	const { name, jobTitle } = data.site.siteMetadata.author
	return (
		<Layout>
			<Helmet title={`${jobTitle} | ${name}`} />
			<section className={styles.hero}>
				<div className={`container flex-centered ${styles.heroInner}`}>
					<article className={styles.heroCopy}>
						<h1 className={styles.heroHeading}>
							{name} <br />
							<span className={styles.highlight}>{jobTitle}</span>
						</h1>
						<p>
							I build elegant and efficient websites / mobile apps that deliver
							great user experiences.
						</p>

						<div className={styles.heroCta}>
							<Button pathname={'/about'} title={'More About me'} />
						</div>
					</article>

					<div className={styles.avatarBox}>
						<StaticImage
							src='./../images/me.jpg'
							alt='krebeDev - Solomon Ekrebe'
							placeholder='tracedSVG'
							width={350}
							height={350}
							className={styles.avatar}
						/>
					</div>
				</div>
			</section>
			<section>
				<div className={`container`}>
					<h2>Here's a set of my recent projects</h2>
					<p>With some tools and tech stacks I have dabbled with.</p>
					<ProjectCards projects={data.allMdx.nodes} />
					<Button pathname={'/portfolio'} title={'View all Projects'} />
				</div>
			</section>
			<section>
				<div className={`container`}>
					<h2>I started writing on the web of recent</h2>
					<p>Checkout my latest posts.</p>
					<BlogCards />
					<Button pathname={'/blog'} title={'See all Posts'} />
				</div>
			</section>
			<Cta />
		</Layout>
	)
}

export default HomePage

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
		allMdx(
			filter: { frontmatter: { featuredProject: { gte: 0 } } }
			sort: { fields: frontmatter___featuredProject, order: ASC }
		) {
			nodes {
				frontmatter {
					title
					tags
					featuredImage {
						childImageSharp {
							gatsbyImageData(width: 600)
						}
					}
				}
				slug
				id
			}
		}
	}
`
