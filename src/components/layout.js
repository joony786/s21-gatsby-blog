import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="layout" data-is-root-path={isRootPath}>
      <header className="site-header container">
        <div className="logo"><Link to="/">Juneate</Link></div>
      </header>
      <main className="site-main container">{children}</main>
      <footer className="site-footer">
        <div className="container">
          Copyright © {new Date().getFullYear()}, Rocco Panacci.
        </div>
      </footer>
    </div>
  )
}

export default Layout
