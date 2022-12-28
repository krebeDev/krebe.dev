import * as React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import Button from '../components/Button'
import ProjectCards from './../components/ProjectCards'
import BlogCards from './../components/BlogCards'
import Cta from './../components/Cta'
import * as styles from '../pages-styles/index.module.css'

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
              I build elegant and efficient frontend products that deliver great
              user experiences.
            </p>

            <div className={styles.heroCta}>
              <Button pathname={'/about'} title={'More About me'} />
            </div>
          </article>

          <div className={styles.avatarBox}>
            <StaticImage
              src='./../images/krebeDev.jpg'
              alt='Solomon Ekrebe'
              placeholder='dominantColor'
              width={792}
              height={908}
              className={styles.avatar}
            />
          </div>
        </div>
      </section>
      <section>
        <div className={`container`}>
          <h2 className={styles.sectionTitle}>Featured Projects</h2>
          <p>
            Here's a few of my work with some tools and tech stack I have
            dabbled with.
          </p>
          <ProjectCards projects={data.allMdx.nodes} />
          <Button pathname={'/portfolio'} title={'View all Projects'} />
        </div>
      </section>
      <section>
        <div className={`container`}>
          <h2 className={styles.sectionTitle}>Writing</h2>
          <p>
            I'm working on a few articles. Watch this space for my latest posts.
          </p>
          <BlogCards />
          {/* <Button pathname={'/blog'} title={'See all Posts'} /> */}
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
          bgColor
          txtColor
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

// Fix button styles location
