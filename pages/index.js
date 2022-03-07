import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import NavigationLinks from '../components/navigation-links'

const Home = (props) => {
  return (
    <>
      <div className="container">
        <Head>
          <title>The Unreal 13</title>
          <meta property="og:title" content="The Unreal 13" />
    <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/0a105cf79c749e4b9e9aaa7b9/3c04ee9f1f28ab9ba2eac68c5.js");</script>
        </Head>
        <header id="navbar" data-role="Header" className="header">
          <Link href="/">
            <a className="link">
              <img
                alt="logo"
                src="/playground_assets/logo-1500h.png"
                loading="eager"
                className="image"
              />
            </a>
          </Link>
          <div className="nav">
            <NavigationLinks rootClassName="rootClassName10"></NavigationLinks>
          </div>
          <div className="btn-group">
            <Link href="/inicio">
              <a className="link1 button button-secondary">Español</a>
            </Link>
            <Link href="/un-services">
              <a className="link2 button">
                <span className="text">
                  <span>Discover UnServices</span>
                  <span></span>
                </span>
              </a>
            </Link>
          </div>
          <div data-type="BurgerMenu" className="burger-menu">
            <svg viewBox="0 0 1024 1024" className="icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="mobile-menu">
            <div className="nav1">
              <div className="container1">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="image1"
                />
                <div data-type="CloseMobileMenu" className="menu-close">
                  <svg viewBox="0 0 1024 1024" className="icon02">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName11"></NavigationLinks>
            </div>
            <div>
              <svg viewBox="0 0 950.8571428571428 1024" className="icon04">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="icon06">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="icon08">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="hero">
          <h1 className="text03">Unxplore your world</h1>
          <span className="text04">
            <span>
              <span>
                Welcome to the world where everyone has a vision.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span></span>
          </span>
          <div className="btn-group1">
            <button className="button">Get Started</button>
            <button className="button1 button-secondary button">
              Get Started
            </button>
          </div>
        </div>
        <div className="banner">
          <img
            alt="image"
            src="https://play.teleporthq.io/static/svg/default-img.svg"
            className="image2"
          />
          <h1 className="text08">Ultim for everyone</h1>
          <span className="text09">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <div className="btn-group2">
            <button className="button2 button button-secondary">
              Get Started
            </button>
            <button className="button3 button">Learn More</button>
          </div>
        </div>
        <footer className="footer">
          <div className="container2">
            <div className="logo">
              <img
                alt="logo"
                src="/playground_assets/logo-1500h.png"
                className="image3"
              />
              <span className="text13">Unxplore your world</span>
            </div>
            <div className="links-container">
              <div className="container3">
                <div className="product-container">
                  <span className="text14">Collections</span>
                  <span className="text15">Ultrado</span>
                  <span className="text16">Ultimado</span>
                  <span className="text17">Coming soon</span>
                </div>
                <div className="company-container">
                  <span className="text18">UnServices</span>
                  <span className="text19">DownZone</span>
                  <span className="text20">Xpand</span>
                </div>
              </div>
              <div className="container4">
                <div className="contact">
                  <span className="text21">Docs</span>
                  <span className="text22">Cookies</span>
                  <span className="text23">Originality</span>
                </div>
              </div>
            </div>
          </div>
          <div className="separator"></div>
          <div className="social-bar">
            <svg viewBox="0 0 950.8571428571428 1024" className="icon10">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="icon12">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <a href="mailto:unusher@pm.me?subject=Hey! " className="link3">
              <svg viewBox="0 0 1024 1024" className="icon14">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
            </a>
            <a href="#navbar" className="link4">
              <svg viewBox="0 0 1024 1024" className="icon16">
                <path d="M243.499 542.165l225.835-225.835v494.336c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-494.336l225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-298.667-298.667c-4.096-4.096-8.789-7.168-13.824-9.259-5.205-2.176-10.795-3.243-16.341-3.243-10.923 0-21.845 4.181-30.165 12.501l-298.667 298.667c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0z"></path>
              </svg>
            </a>
          </div>
        </footer>
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
            background-color: #313131;
          }
          .header {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .link {
            display: contents;
          }
          .image {
            height: 2rem;
            text-decoration: none;
          }
          .nav {
            display: flex;
          }
          .btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .link1 {
            font-style: normal;
            font-weight: 700;
            border-width: 0px;
            margin-right: var(--dl-space-space-twounits);
            text-decoration: none;
            background-color: var(--dl-color-primary-2);
          }
          .link2 {
            color: var(--dl-color-gray-black);
            text-decoration: none;
            background-color: var(--dl-color-primary-1);
          }
          .text {
            font-style: normal;
            font-weight: 700;
          }
          .burger-menu {
            display: none;
          }
          .icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .container1 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .image1 {
            height: 2rem;
          }
          .menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .icon02 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .icon08 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .hero {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            min-height: 80vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.2) 0%,
                rgba(0, 0, 0, 0.8) 100%
              ),
              url('https://images.unsplash.com/photo-1646387785399-6e8693ef5074?ixid=Mnw5MTMyMXwwfDF8YWxsfDI0fHx8fHx8Mnx8MTY0NjQyNTM3Nw&ixlib=rb-1.2.1&w=1500');
          }
          .text03 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            font-family: Krona One;
          }
          .text04 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-twounits);
            font-family: Inter;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .button {
            font-size: 16px;
            font-style: normal;
            transition: 0.3s;
            font-weight: 700;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
          }
          .button:hover {
            transform: scale(1.02);
          }
          .button1 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            text-transform: capitalize;
          }
          .button1:hover {
            transform: scale(1.02);
          }
          .banner {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .image2 {
            width: 100px;
            margin-top: 0px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .text08 {
            color: var(--dl-color-gray-white);
            font-size: 3rem;
            text-align: center;
            font-family: Krona One;
          }
          .text09 {
            color: var(--dl-color-gray-white);
            max-width: var(--dl-size-size-maxwidth);
            margin-top: var(--dl-space-space-twounits);
            text-align: center;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .btn-group2 {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .button2 {
            color: var(--dl-color-gray-white);
            transition: 0.3s;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
            background-color: var(--dl-color-gray-black);
          }
          .button2:hover {
            transform: scale(1.02);
          }
          .button3 {
            transition: 0.3s;
            margin-left: var(--dl-space-space-unit);
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .button3:hover {
            transform: scale(1.02);
          }
          .footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-gray-black);
          }
          .container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .logo {
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: flex-start;
            flex-direction: column;
          }
          .image3 {
            height: 2rem;
          }
          .text13 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .links-container {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .container3 {
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: row;
            justify-content: space-between;
          }
          .product-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            margin-right: 10rem;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text14 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .text15 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text16 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text17 {
            color: var(--dl-color-gray-white);
          }
          .company-container {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .text18 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .text19 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text20 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contact {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: flex-start;
          }
          .text21 {
            color: var(--dl-color-gray-white);
            font-weight: 700;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .text22 {
            color: var(--dl-color-gray-white);
            margin-bottom: var(--dl-space-space-unit);
          }
          .text23 {
            color: var(--dl-color-gray-white);
          }
          .separator {
            width: 100%;
            height: 1px;
            margin-top: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
            background-color: var(--dl-color-gray-900);
          }
          .social-bar {
            width: 100%;
            display: flex;
            padding: 0px;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .icon10 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .icon12 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .link3 {
            display: contents;
          }
          .icon14 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            text-decoration: none;
          }
          .link4 {
            display: contents;
          }
          .icon16 {
            fill: var(--dl-color-gray-white);
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-left: var(--dl-space-space-sixunits);
            margin-right: 0px;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .hero {
              flex-direction: column;
            }
            .text03 {
              text-align: center;
            }
            .text04 {
              text-align: center;
            }
            .footer {
              flex-direction: column;
            }
            .container3 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 767px) {
            .header {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .nav {
              display: none;
            }
            .btn-group {
              display: none;
            }
            .burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .banner {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .text09 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .container2 {
              align-items: center;
              flex-direction: column;
              justify-content: space-between;
            }
            .logo {
              align-items: center;
            }
            .image3 {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .text13 {
              margin-top: var(--dl-space-space-twounits);
              text-align: center;
              margin-bottom: var(--dl-space-space-twounits);
            }
            .links-container {
              width: 100%;
              align-items: flex-start;
              flex-direction: row;
              justify-content: center;
            }
            .container3 {
              margin-right: var(--dl-space-space-fourunits);
            }
            .product-container {
              margin-right: var(--dl-space-space-fourunits);
            }
            .social-bar {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .header {
              padding: var(--dl-space-space-unit);
            }
            .icon {
              fill: var(--dl-color-gray-white);
            }
            .mobile-menu {
              padding: 16px;
            }
            .hero {
              width: 100%;
              padding: var(--dl-space-space-twounits);
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .btn-group1 {
              flex-direction: column;
            }
            .banner {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .btn-group2 {
              flex-direction: column;
            }
            .button3 {
              margin-top: var(--dl-space-space-unit);
              margin-left: 0px;
            }
            .footer {
              padding: var(--dl-space-space-unit);
            }
            .container2 {
              align-items: center;
              flex-direction: column;
            }
            .image3 {
              margin-bottom: 0px;
            }
            .text13 {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .links-container {
              align-items: center;
              flex-direction: column;
            }
            .container3 {
              margin-right: 0px;
            }
            .container4 {
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-bottom: 0px;
            }
            .contact {
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-unit);
            }
            .social-bar {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
