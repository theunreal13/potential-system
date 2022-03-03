import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <nav className={styles['Nav1']}>
        <span className={styles['text']}>{props.text5}</span>
        <span className={styles['text1']}>{props.text21}</span>
        <span className={styles['text2']}>{props.text31}</span>
        <span className={styles['text3']}>{props.text41}</span>
      </nav>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  text41: 'Blog',
  text31: 'Originality',
  text5: 'Home',
  text21: 'Contact',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  text41: PropTypes.string,
  text31: PropTypes.string,
  text5: PropTypes.string,
  text21: PropTypes.string,
}

export default NavigationLinks
