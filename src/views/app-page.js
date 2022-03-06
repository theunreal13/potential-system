import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './app-page.module.css'

const AppPage = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>404 - The Unreal 13</title>
        <meta property="og:title" content="404 - The Unreal 13" />
      </Helmet>
      <div className={styles['Banner']}>
        <h1 className={styles['text']}>UnFound</h1>
        <span className={styles['text1']}>
          <span>
            <span>
              ;( The page that you&apos;re looking, it has been removed or
              changed.
            </span>
          </span>
        </span>
        <div className={styles['BtnGroup']}>
          <button
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppPage
