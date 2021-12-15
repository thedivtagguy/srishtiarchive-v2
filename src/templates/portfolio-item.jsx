import { graphql, Link } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import kebabCase from "lodash/kebabCase"
import Url from "../components/url"
import algoliasearch from "algoliasearch/lite"
import {
  InstantSearch,
  Hits,
  connectStateResults,
  Index,
  Configure,
  PoweredBy,
} from "react-instantsearch-dom"
import { ExperimentalConfigureRelatedItems } from 'react-instantsearch-dom';




export default props => {
  const {
    description,
    name,
    author,
    major,
    year,
    tools,
    featured,
    files,
    course,
    thumbnailUrl,
    urls,
    category,
    groupmembers,
    createdAt,
  } = props.data.item

  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )
  const hit = {
    name: name  ,
    major: major,
    category: category,
  };
  
  return (
    <Layout>
      <SiteMetadata title={name} description={description} />

      <div class="max-w-3xl flex flex-row justify-items-center items-center mx-auto lg:px-0 px-5 w-full">
        {featured ? (
          <h5 class="lg:text-lg text-sm text-center capitalize mx-auto text-srishti-red font-ibm-mono font-extrabold">
            ⭐ FEATURED PROJECT
          </h5>
        ) : (
          <span> </span>
        )}
      </div>

      <section class="flex flex-col items-center justify-center py-4 ">
        <div class="relative max-w-3xl px-6 text-white auto lg:px-0">
          <div class="flex flex-col space-y-8 w-full md:flex-col">
            <div class="flex justify-between">
              <h2 class="relative leading-tight flex flex-col pb-6 text-3xl lg:text-6xl font-bold text-center">
                {name}
              </h2>
            </div>
            <div className="flex items-center space-x-8 justify-between my-4">
              <div>
                <Link to={`/authors/${kebabCase(author)}/`}>
                  <h3 className="cta lg:text-md font-ibm-mono sm:text-md">
                    {author}
                  </h3>
                </Link>
              </div>
              <div>
                <h3 className="font-bold sm:text-xs text-xs font-ibm-mono lg:text-md">
                  {createdAt}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <section class="flex items-center w-full max-w-3xl lg:px-0 my-8  px-6 mx-auto justify-center">
          <div>
            {thumbnailUrl && (
              <img
                src={thumbnailUrl}
                class="mx-auto  object-cover w-full"
                style={{ width: "800px" }}
              />
            )}
          </div>
        </section>

        <div class="grid lg:grid-cols-5 grid-cols-1 lg:px-0 px-6 w-full gap-2 lg:gap-10 max-w-3xl mx-auto">
          <div class="col-span-3">
            <p class="text-left text-sm text-black">
              {description.description}
            </p>
          </div>
          <div class="col-span-2">
          <section>
        <div class="">
          <h4 class="font-bold text-lg py-4">Project Files</h4>
          <ul class="flex flex-col space-y-2 lg:py-4 ">
            {files.map(file => {
              return (
                <a href={file.localFile.url} target="_blank" rel="noreferrer">
                  <li class="px-2 py-2 text-sm font-medium hover:bg-black hover:text-white bg-srishti-dark-purple rounded-md border-2 border-black text-white">
                  {file.title}{" "}
                  </li>
                </a>
              )
            })}
          </ul>
        </div>

        {urls && (
          <div>
            <div>
              <h4 class="font-bold text-lg py-4 ">Project Links</h4>
            </div>
            <div class="lg:pt-4">
              {urls.map((url, i) => {
                return (
                  <a href={url} target="_blank" rel="noreferrer">
                  <li class="px-2 py-2 list-none text-sm font-medium hover:bg-black hover:text-white bg-srishti-red rounded-md border-2 border-black text-white">
                  Link {i+1}{" "}
                  </li>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </section>
      <div class="flex justify-between items-center lg:px-0  py-8  max-w-3xl w-full mx-auto">
          <div >
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >
              <img
                alt="Creative Commons License"
                src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
              />
            </a>
          </div>
          <div class="w-2/3">
            <p class="text-mxs text-center pt-2 text-gray-600 pb-2 font-light">
              This work is licensed under a{" "}
              <a
                rel="license"
                href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                class="font-bold"
              >
                Creative Commons Attribution-NonCommercial-ShareAlike 4.0
                International License
              </a>
              .
            </p>
          </div>
        </div>
            </div>
        </div>
      </section>
    

      <section>
        <div class="grid lg:grid-cols-6 grid-cols-1 lg:px-0 px-6 py-8 max-w-3xl mx-auto">
          <div class="lg:col-span-6 ">
            <div>
              <p class="font-ibm-mono  font-bold">
                Explore more by:{" "}
               
              </p>
              <div class="grid grid-cols-1 md:grid-cols-7 ">
                <div class="flex flex-col py-2  lg:py-4 items-start justify-start col-span-1 md:col-span-2 lg:col-span-1">
                  <Link to={`/years/${kebabCase(year)}/`}>
                    <span class="px-2 py-1 text-xs lg:text-sm rounded text-white  bg-purple-600 font-medium">
                      {year}
                    </span>
                  </Link>
                </div>
                <div class="flex flex-col py-2 lg:py-4 items-start justify-start col-span-1 md:col-span-2 lg:col-span-3">
                  <Link to={`/categories/${kebabCase(category)}/`}>
                    <span class="px-2 py-1 text-xs lg:text-sm rounded text-white  bg-green-600 font-medium">
                      {category}
                    </span>
                  </Link>
                </div>

                <div class="flex lg:flex-row py-2 lg:gap-4 lg:items-center lg:justify-start lg:col-span-3 flex-wrap gap-2 flex-row">
                  {tools.map((tag, i) => [
                    <Link to={`/tools/${kebabCase(tag)}/`}>
                      <span
                        class="px-2 py-1  text-xs lg:text-sm rounded text-white  bg-red-600 font-medium"
                        key={i}
                      >
                        {tag}
                        {i < tools.length - 1 ? " " : ""}
                      </span>
                    </Link>,
                  ])}
                </div>
                <div class="flex flex-col py-2  items-start justify-center col-span-1 md:col-span-2 lg:col-span-1">
                  <Link to={`/majors/${kebabCase(major)}/`}>
                    <span class="px-2 py-1  text-xs lg:text-sm rounded text-white  bg-yellow-600 font-medium">
                      {major}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <InstantSearch searchClient={searchClient} indexName="archives">

      <Index indexName="archives">
  <ExperimentalConfigureRelatedItems
    hit={hit}
    matchingPatterns={{
      category: { score: 1 },
      major: { score: 2 }
    }}
  />

  <Configure hitsPerPage={2} />
  <Hits />

</Index>
</InstantSearch> */}
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    item: contentfulPortfolio(slug: { eq: $slug }) {
      description {
        description
      }
      major
      author
      tools
      files {
        id
        localFile {
          url
        }
        title
      }
      name
      year
      contact
      category
      course
      groupmembers
      featured
      thumbnailUrl
      urls
      createdAt(formatString: "DD MMMM, YYYY")
    }
  }
`
