import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import Search from "../components/search/SearchBox"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Srishti Archives" />
      <Hero />
    
      <section class="lg:px-6 px-2 w-full mx-auto max-w-7xl">
        <Search shouldHide={false}></Search>
      </section>
    </Layout>
  )
}

export default IndexPage

