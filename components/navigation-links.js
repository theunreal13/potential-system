import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <nav className="nav1">
          <Link href="/">
            <a className="link">{props.text5}</a>
          </Link>
          <Link href="/contact">
            <a className="link1">{props.text21}</a>
          </Link>
          <Link href="/originality">
            <a className="link2">{props.text31}</a>
          </Link>
          <span className="text">{props.text41}</span>
        </nav>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .nav1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .link {
            color: #ffffff;
            font-style: normal;
            font-weight: 500;
            text-decoration: none;
          }
          .link1 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .link2 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .text {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .nav1 {
              align-items: flex-start;
              flex-direction: column;
            }
            .link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
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
