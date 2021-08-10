import React, {useEffect} from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import { Helmet } from 'react-helmet';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as styles from '../../styles/blog-post-template.module.css'
import OptinForm from '../../components/optin-form';
import AuthorCard from '../../components/author-card';
import Recommended from '../../components/recommended';
 
const BlogPost = ({data, ...props}) => {
  const {date, tags, title, author} = data.mdx.frontmatter

  useEffect(() => {
    console.log(props)
  })
  return ( 
    <Layout>
      <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
      <section className={`container`}>
        <div className={styles.postHeader}>
          <h1 className={styles.postTitle}>{title}</h1>
          <p>By <Link to={'/about'}>{author}</Link> on {date} - <span className={styles.timeToRead}>{data.mdx.timeToRead} min read</span></p>
          <ul className={styles.tagList}>
          {tags.map((tag, index) => <li key={tag + index} className={styles.postTag}>
            <button className={styles.postTagButton}>{tag}</button>
          </li>)}
          </ul>
        </div>
        
        <div className={styles.postContent}>
        <article className={styles.postBody}>
         <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
         </article>
        <AuthorCard author={data.site.siteMetadata.author} />
        <OptinForm />
        <Recommended 
          next={{title: 'Next Post', slug: '/blog/blog-two'}} 
          previous={{title: 'Previous Post', slug: '/blog/blog-one'}}/>
        </div>
      </section>
    </Layout>
   );
}
 
export default BlogPost;

export const query = graphql`
query BlogPostQuery($id: String) {
  mdx(id: {eq: $id}) {
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