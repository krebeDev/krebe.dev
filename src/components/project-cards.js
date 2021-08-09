import React from 'react';
import { GatsbyImage, getImage} from 'gatsby-plugin-image';
import * as styles from '../styles/project-cards.module.css'
import { Link } from 'gatsby';


const ProjectCards = ({projects}) => {
  return ( <ul className={`flex-centered ${styles.projectList}`}>
    {projects.map(({frontmatter, id, slug }) => <li key={id} className={styles.projectCard}>
    <Link to={`/portfolio/${slug}`}>
    <div>
      <div className={styles.projectSummary}>
      <h2 className={styles.projectName}>{frontmatter.title}</h2>
      <ul className={styles.tagList}>
        {frontmatter.tags.map((tag) => <li className={styles.tag} key={id + tag}>{tag}</li>)}
        </ul>
        <p className={styles.more}>more...</p>
      </div>
        <GatsbyImage image={getImage(frontmatter.featuredImage)} alt={frontmatter.title} />
    </div>
    </Link>
  </li>)}
  </ul> );
}
 
export default ProjectCards;