import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import SearchGrid2 from "../components/search/searchV2"
import MobileSearch from "../components/search/MobileRefine"
const All = () => (
  <Layout>
    <SiteMetadata title="All Projects" description="Browse All Projects in the Srishti Archive" />
    <div class="hidden lg:block md:block">
    <SearchGrid2></SearchGrid2>
    </div>
    <div class="block lg:hidden md:hidden">
    <MobileSearch></MobileSearch>
    </div>
</Layout>
)

export default All


