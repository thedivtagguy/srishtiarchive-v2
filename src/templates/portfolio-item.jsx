import { graphql, Link } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Layout from "../layouts/Layout"
import kebabCase from "lodash/kebabCase"
import Url from "../components/url"
export default props => {
  const {
    description,
    name,
    author,
    major,
    year,
    tools,
    files,
    course,
    thumbnailUrl,
    urls,
    category,
    groupmembers,
  } = props.data.item
  return (
    <Layout>
      <SiteMetadata title={name} description={description} />

      <section class="flex items-center justify-center py-6  sm:py-8 md:pt-24 lg:pt-12">
        <div class="relative max-w-3xl px-10 text-white auto lg:px-0">
          <div class="flex flex-col w-full md:flex-col">
            <div class="flex justify-between">
              <h1 class="relative leading-tight flex flex-col text-3xl lg:text-6xl font-extrabold text-left text-lime">
                {name}
              </h1>
            </div>
            <h2 className="py-3 pb-4 mb-4 text-xl font-extrabold leading-tight tracking-tight border-gray-500 lg:text-2xl border-b-1 text-light-gray sm:text-3xl">
              {author}{" "}
              <span class="px-2 text-base lg:text-lg text-gray-600">
                {year}, {" "} {major}
              </span>
            </h2>
          </div>
          <p class="text-left text-sm text-gray-400 leading-royal xl:text-lg">
            {description.description}{" "}
          </p>
          
          <div>
                {groupmembers && (
                  <div class="text-sm pt-4 text-lime whitespace-normal">
                    Authors:
                    {groupmembers.map((tag, i) => [
                      <p class="text-sm text-lime whitespace-normal" key={i}>
                        <span class="text-lime font-semibold">{tag}</span>
                        {i < groupmembers.length - 1 ? ", " : ""}
                      </p>,
                    ])}
                  </div>
                )}
          </div>
          <p class="text-sm pt-4 font-normal text-gray-500">
           <span class="font-normal">Course/Unit:</span> {course}
          </p>
        </div>
      </section>
      <section class="grid lg:grid-cols-2 grid-cols-1 lg:px-0 px-10 w-full py-4 gap-2 lg:gap-10 max-w-3xl mx-auto">
            <div class="">
              <h4 class="font-bold text-lg text-lime">Project Files and Output</h4>
              <ul class="flex flex-col lg:py-4 ">
                    {files.map(file => {
                      return (
                        <a href={file.localFile.url}>
                          <li class="flex flex-row justify-start items-center hover:text-blue-purple text-high-yellow ">
                            <div class="select-none cursor-pointer flex flex-grow-1 items-center py-2">
                              <div class="inline-flex">
                                <div class="font-semibold text-sm  inline-flex hover:text-blue-purple text-high-yellow dark:text-white">
                                  {file.title} <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                                </div>
                              </div>
                            </div>
                          </li>
                        </a>
                      )
                    })}
                  </ul>
            </div>
  
            {urls && <div><div>
              <h4 class="font-bold text-lg text-lime">Project Links</h4>
            </div>
            <div class="lg:pt-4">
            {urls.map((url, i) => {
                        return (
                          <div class="py-2">
                            <Url link={url} number={i} />
                          </div>
  
                        )
                      })}</div></div>}
  
          </section>


      <section class="flex items-center max-w-3xl lg:px-0 px-10 mx-auto justify-center">
        <div>
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              class="rounded-lg mx-auto object-cover w-full"
            />
          )}
        </div>
      </section>

      <section>
        <div class="grid lg:grid-cols-6 grid-cols-1 lg:px-0 px-10 max-w-3xl mx-auto">
          <div class="lg:col-span-6 ">
            <div class="mt-8 px-4 bg-accent-gray border-2 border-gray-800 border-dashed rounded-lg sm:px-8 md:px-8 py-5 sm:shadow ">
              <p class="text-base text-purple-500 font-bold">
                METADATA{" "}
                <span class="text-xs text-purple-700">
                  (Click to Explore More)
                </span>
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

        <div class="grid grid-cols-2 py-4 justify-between items-center lg:px-0  px-10 max-w-3xl w-full mx-auto">
                    <div>
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
                    <div class="">
                      <p class="text-mxs text-center pt-2 text-gray-600 pb-2 font-light">
                        This work is licensed under a{" "}
                        <a
                          rel="license"
                          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                          class="highlight-text font-bold"
                        >
                          Creative Commons Attribution-NonCommercial-ShareAlike
                          4.0 International License
                        </a>
                        .
                      </p>
                    </div>
                  </div>
      </section>
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
      thumbnailUrl
      urls
    }
  }
`
