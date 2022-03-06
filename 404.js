import React from 'react'
import Head from 'next/head'

const AppPage = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>404 - The Unreal 13</title>
          <meta property="og:title" content="404 - The Unreal 13" />
        </Head>
        <div className="banner">
          <h1 className="text">UnFound</h1>
          <span className="text1">
            <span>
              <span>
                ;( The page that you&apos;re looking, it has been removed or
                changed.
              </span>
            </span>
          </span>
          <div className="btn-group">
            <button className="button">Go back</button>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .banner {
            width: 100%;
            display: flex;
            margin-top: 0px;
            align-items: center;
            margin-left: 0px;
            padding-top: 410px;
            margin-right: 0px;
            padding-left: var(--dl-space-space-twounits);
            margin-bottom: 0px;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: 410px;
            background-size: contain;
            justify-content: center;
            background-image: linear-gradient(
                90deg,
                rgb(189, 195, 199) 0%,
                rgba(44, 62, 80, 0.6) 100%
              ),
              url('/playground_assets/52mgjtrhpabbouruv0d5--cw7is_adobecreativecloudexpress-1500w.gif');
            background-position: center;
          }
          .text {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            text-align: center;
            font-family: Krona One;
          }
          .text1 {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .button {
            color: var(--dl-color-gray-black);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-primary-1);
          }
          .button:hover {
            transform: scale(1.02);
          }
          @media (max-width: 767px) {
            .banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .text1 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .banner {
              padding-top: 330px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 330px;
            }
            .btn-group {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default AppPage
