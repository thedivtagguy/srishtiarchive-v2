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
    urls,
    category,
    groupmembers,
  } = props.data.item
  console.log(urls)
  return (
    <Layout>
      <SiteMetadata title={name} description={description} />

      <div className="bg-transparent h-1/2 mx-4 lg:py-8">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 pb-8">
              <h1 className="text-4xl pb-4 leading-tight font-extrabold tracking-tight text-lime sm:text-5xl mb-1">
                {name}
              </h1>
              <div className="flex lg:flex-row flex-col justify-start lg:space-x-6 lg:items-center items-start">
                <h3 className="text-2xl leading-tight font-extrabold tracking-tight text-light-gray sm:text-3xl mb-1">
                  {author}
                </h3>
                <h3 className="lg:text-2xl lg:border-l-2 lg:px-4 border-gray-600 leading-tight font-extrabold tracking-tight text-gray-700 sm:text-3xl mb-1">
                  {year}, {major}
                </h3>
              </div>
              <h3 class="text-lg leading-6 font-extrabold text-gray-700  dark:text-white">
                {course}
              </h3>
              {description && (
                <div className="my-4 text-base lg:w-5/6 lg:text-base text-left leading-snug text-gray-500 whitespace-pre-line">
                  {description.description}
                </div>
              )}
              <div>
                {groupmembers && (
                  <div class="text-sm text-lime whitespace-normal">
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
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12 h-36 overflow-y-auto ">
              <div class="container flex flex-col mx-auto w-full items-start justify-start py-4 border-gradient-br-pink-red-yellow-accent-gray border-transparent border-solid border-1 bg-accent-gray dark:bg-gray-800 rounded-xl">
                <div class="py-4 mx-3 border-b border-gray-800 w-7/9">
                  <h3 class="text-lg leading-6 font-extrabold highlight-text  dark:text-white">
                    Explore Further{" "}
                    <span class="text-mxs font-semibold text-light-gray">(Click to Download)</span>
                  </h3>
                  <div class="text-mint-cream dark:text-gray-200 text-sm font-semibold">
                    Project Files & Output
                  </div>
                </div>
                <ul class="flex flex-col">
                  {files.map(file => {
                    return (
                      <a href={file.localFile.url}>
                        <li class="flex flex-row justify-start items-center hover:text-blue-purple text-high-yellow ">
                          <div class="select-none cursor-pointer flex flex-grow-1 items-center p-4">
                            <div class="">
                              <div class="font-semibold text-sm  hover:text-blue-purple text-high-yellow dark:text-white">
                                {file.title}
                              </div>
                            </div>
                          </div>
                        </li>
                      </a>
                    )
                  })}
                </ul>
                {urls && (
                  <div>
                    <div class="mx-4  border-b border-gray-800 w-full">
                      <h3 class="text-sm leading-6 py-2 font-extrabold highlight-text w-full dark:text-white">
                        External Project Links
                      </h3>
                    </div>
                    {urls.map((url, i) => {
                      return (
                        <div class="px-4 py-4">
                          <Url link={url} number={i} />
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>
            <div class="grid lg:grid-cols-9 grid-cols-1">
              <div class="lg:col-span-6">
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
                    <div class="flex flex-col py-2 lg:py-4 items-start justify-start col-span-1 md:col-span-2 lg:col-span-2">
                      <Link to={`/categories/${kebabCase(category)}/`}>
                        <span class="px-2 py-1 text-xs lg:text-sm rounded text-white  bg-green-600 font-medium">
                          {category}
                        </span>
                      </Link>
                    </div>
                    <div class="flex flex-col py-2  items-start justify-center col-span-1 md:col-span-2 lg:col-span-1">
                      <Link to={`/majors/${kebabCase(major)}/`}>
                        <span class="px-2 py-1  text-xs lg:text-sm rounded text-white  bg-yellow-600 font-medium">
                          {major}
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
                  </div>
                </div>
              </div>
              <div class="lg:col-span-3 lg:pl-12">
                <div className="lg:mt-8 mt-2">
                  <div class="lg:mt-8  px-4 space-x-4 grid grid-cols-2  justify-center items-center bg-accent-gray border-2 border-gray-800 border-dashed rounded-lg sm:px-8 md:px-4 py-8 sm:shadow ">
                    <div class="mx-auto">
                      <a
                        rel="license"
                        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                      >
                        <img
                          alt="Creative Commons License"
                          class="mx-auto"
                          src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
                        />
                      </a>
                    </div>
                    <div class="">
                      <p class="text-xxs text-center pt-2 text-gray-600 pb-2 font-light">
                        This work is licensed under a{" "}
                        <a
                          rel="license"
                          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
                        >
                          Creative Commons Attribution-NonCommercial-ShareAlike
                          4.0 International License
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      urls
    }
  }
`
