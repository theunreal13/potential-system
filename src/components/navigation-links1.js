import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links1.module.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
      <span className={styles['text2']}>{props.text2}</span>
      <span className={styles['text3']}>{props.text3}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text3: 'Blog',
  text1: 'Contacto',
  text2: 'Originalidad',
  rootClassName: '',
  text: 'Inicio',
}

NavigationLinks1.propTypes = {
  text3: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks1
