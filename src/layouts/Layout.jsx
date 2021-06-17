import PropTypes from "prop-types"
import React from "react"
import "typeface-inter"
import "../styles/style.css"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = ({ children }) => {
  return (
    <>
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js"></script>

      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isHome: PropTypes.bool,
}

export default Layout
