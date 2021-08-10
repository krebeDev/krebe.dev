import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import * as styles from '../styles/recommends.module.css'


const Recommended = ({next, previous}) => {
  return ( <div className={`flex-centered`}>
    {previous && <Link to={previous.slug} className={styles.recommendLink}> 
      <FontAwesomeIcon icon={faLongArrowAltLeft} />{ ' '}
      <span className={styles.direction}>Previous</span>
      <span className={styles.title}>{previous.title}</span>
    </Link>}

    {next && <Link to={next.slug} className={styles.recommendLink}>
      <span className={styles.direction}>Next </span>{ ' '}
      <FontAwesomeIcon icon={faLongArrowAltRight} />
      <span className={styles.title}>{next.title}</span>
    </Link>}
  </div> );
}
 
export default Recommended;