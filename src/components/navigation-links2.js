import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links2.module.css'

const NavigationLinks2 = (props) => {
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

NavigationLinks2.defaultProps = {
  text41: 'Blog',
  rootClassName: '',
  text5: 'Home',
  text31: 'Originality',
  text21: 'Contact',
}

NavigationLinks2.propTypes = {
  text41: PropTypes.string,
  rootClassName: PropTypes.string,
  text5: PropTypes.string,
  text31: PropTypes.string,
  text21: PropTypes.string,
}

export default NavigationLinks2
