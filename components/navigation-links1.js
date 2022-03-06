import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks1 = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <span className="text">{props.text}</span>
        <span className="text1">{props.text1}</span>
        <span className="text2">{props.text2}</span>
        <span className="text3">{props.text3}</span>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
            background-color: var(--dl-color-gray-black);
          }
          .text {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 500;
          }
          .text1 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
          }
          .text2 {
            color: var(--dl-color-gray-white);
            font-style: normal;
            font-weight: 500;
            margin-left: var(--dl-space-space-twounits);
          }
          .text3 {
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
            .text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
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
