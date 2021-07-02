import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import SearchGrid from "../components/search/search"

const All = () => (
  <Layout>
    <SiteMetadata title="All Projects" description="Browse All Projects in the Srishti Archive" />
    <SearchGrid></SearchGrid>

</Layout>
)

export default All


