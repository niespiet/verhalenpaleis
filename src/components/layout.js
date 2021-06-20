import * as React from "react"
import { Link } from "gatsby"

import CookieConsent from 'react-cookie-consent';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
      <CookieConsent
          location="bottom"
          buttonText="Toestaan"
          declineButtonText="Weigeren"
          debug={true}
          enableDeclineButton
          cookieName="gatsby-gdpr-google-analytics"
          style={{ background: "#ccc" }}
          buttonStyle={{
            padding: "1em",
            margin: "1em",
            background: "#005b99",
            color: "white"
          }}
          declineButtonStyle={{
            padding: "1em",
            margin: "1em",
            background: "#005b99",
            color: "white"
          }}>
Deze site gebruikt cookies om bij te houden hoe vaak deze verhalen gelezen worden.
</CookieConsent>
    </div>
  )
}

export default Layout
