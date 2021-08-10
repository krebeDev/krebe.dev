import React from 'react';
import * as styles from '../styles/cta.module.css'
import { Link } from 'gatsby';

const Cta = (props) => {
  return ( <section className={`container`}>
    <div className={styles.ctaInner}>
    <h2 className={styles.ctaHeading}>Let's talk!</h2>
      <p>Are you looking to collaborate on an interesting project or just want to chat? I'll be super excited to hear from you! <br />
      <a href='mailto:solomon@krebe.dev' className={styles.ctaLink}>Send me an email</a> or reach out via the{' '}
      <Link to='/contact' className={styles.ctaLink}>Contact Page.</Link></p>
    </div>
  </section> );
}
 
export default Cta;