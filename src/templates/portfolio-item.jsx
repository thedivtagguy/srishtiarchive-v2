import { graphql, Link } from "gatsby"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Cards from "../components/Cards"
import Layout from "../layouts/Layout"
import kebabCase from "lodash/kebabCase"

export default props => {
  const {
    description,
    name,
    related,
    author,
    major,
    year,
    tools,
    files,
    contact
  } = props.data.item

  function handleCopy() {
    var copyText = document.getElementById("mail")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
  }
  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={description}
    
      />
      
          <div className="bg-gray-900 pattern h-1/2 mx-4 lg:py-8">
            <div className="container">
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-2/3 pb-8">
                      <h1 className="text-6xl leading-tight font-extrabold tracking-tight text-lime sm:text-6xl mb-1">
                        {name}
                      </h1>
                      <div className="flex lg:flex-row flex-col justify-start lg:space-x-6 lg:items-center items-start">
                        <h3 className="text-2xl leading-tight font-extrabold tracking-tight text-white sm:text-3xl mb-1">
                            {author}
                        </h3>
                        <h3 className="lg:text-2xl lg:border-l-2 lg:px-4 border-gray-600 leading-tight font-extrabold tracking-tight text-gray-700 sm:text-3xl mb-1">
                            {year}, {major}
                        </h3>
                      </div>
                      {description && (
                      <div className="my-4 text-base lg:w-5/6 lg:text-base text-justify leading-snug text-gray-500 whitespace-pre-line">
                        {description.description} 
      
                      </div>
                      )}
                       <div>
                      
                       </div>
                  </div>
                  <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12 h-36 overflow-y-auto ">
                      <div class="container flex flex-col mx-auto w-full items-center justify-center py-4 bg-gray-800 dark:bg-gray-800 rounded-sm shadow-shadow-yellow">
                        <div class="pb-4 px-3 border-b border-lime w-full">
                            <h3 class="text-lg leading-6 font-extrabold text-blaze-orange dark:text-white">
                              Explore Further
                            </h3>
                            <div class="text-mint-cream dark:text-gray-200 text-sm">
                              Project Files & Output
                            </div>
                        </div>
                        <ul class="flex flex-col">
                        {files.map(file => {
                                return (
                                
                          <a  href={file.localFile.url}>
                                  <li class="flex flex-row hover:text-blue-purple text-high-yellow ">
                                  <div class="select-none cursor-pointer flex flex-1 items-center p-4">
                                      <div class="flex-1">
                                        <div class="font-semibold hover:text-blue-purple text-high-yellow dark:text-white">
                                            {file.title}
                                        </div>
                                      </div>
                                      <button class="w-24 text-right flex justify-end">
                                        <svg width="20" fill="currentColor" height="20" class="hover:text-blue-purple dark:hover:text-white dark:text-gray-200 text-high-yellow" viewBox="0 0 1792 1792" >
                                            <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                                            </path>
                                        </svg>
                                      </button>
                                  </div>
                                </li>
                                </a>
                                )
                              })}
                        </ul>
                      </div>
                  </div>
                  <div class="grid lg:grid-cols-9 grid-cols-1">
            <div class="lg:col-span-6">
              <div class="mt-8 px-4 bg-gray-900 border-2 border-gray-800 border-dashed rounded-lg sm:px-8 md:px-8 py-5 sm:shadow ">
                          <p class="text-base text-purple-500 font-bold">METADATA <span class="text-xs text-purple-700">(Click to Explore More)</span></p>
                          <div class="grid grid-cols-2 md:grid-cols-6 ">
                              <div class="flex flex-col py-4 items-start justify-start col-span-1 md:col-span-2 lg:col-span-1">
                              <Link to={`/year/${kebabCase(year)}/`}>
                                <span class="px-2 py-1 text-base rounded text-white  bg-purple-600 font-medium">
                                { year}
                                </span>
                                </Link>
                              </div>
                              <div class="flex flex-col items-start justify-center col-span-1 md:col-span-2 lg:col-span-1">
                              <Link to={`/major/${kebabCase(major)}/`}>

                                <span class="px-2 py-1  text-base rounded text-white  bg-yellow-600 font-medium">
                                { major }
                                </span>  
                                </Link>
                              </div>
                              <div class="flex lg:flex-row lg:gap-4 lg:items-center lg:justify-start lg:col-span-4 flex-wrap gap-2 flex-row">
                              {tools.map((tag, i) => [
                                <Link to={`/tools/${kebabCase(tag)}/`}>
                                  <span class="px-2 py-1  text-base rounded text-white  bg-red-600 font-medium" key={i}>
                                    {tag}
                                    {i < tools.length - 1 ? ' ' : ''}
                                  </span>
                                  </Link>
                                ])}
                              
                                
                              </div>
                          </div>
                        </div>
                    </div>
                    <div class="lg:col-span-3 lg:pl-12"> 
                    <div className="lg:mt-8 mt-2">
                        <div class="lg:mt-8 px-4 space-x-4 grid grid-cols-2 justify-center items-center bg-gray-900 border-2 border-gray-800 border-dashed rounded-lg sm:px-8 md:px-4 py-4 sm:shadow ">
                            <div class="mx-auto">
                              <p class="text-sm text-center text-mint-cream pb-2 font-bold">Author Contact</p>
                              


                            <input
                                readOnly
                                type="text"
                                value={contact}
                                id="mail" disabled="" class=" rounded-sm mx-auto border-transparent text-xs flex-1 ml-4 appearance-none border border-black w-4/5 py-1 px-4 bg-mint-cream text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                              />
                              <button onClick={handleCopy} type="button" class="py-1 ml-2 px-4 mt-2 flex justify-start items-center  bg-gray-800 shadow-orange hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center lg:text-xs text-mxs font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-sm ">
                              Click to Copy Email
                              </button>
                            </div>
                            <div class="">
                              <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" class="mx-auto" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>
                              <p class="text-xxs text-center pt-2 text-gray-600 pb-2 font-light">This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.</p>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

         
          {related && (
          <div className="bg-gray-900 pattern ">
            <div className="container">
                <h2 className="text-3xl sm:text-4xl px-8 py-4 leading-tight font-extrabold tracking-tight text-white">
                  Related Projects
                </h2>
                <Cards items={related} hideLastItemOnMobile={true} />

            </div>
          
          </div>
          )}
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
      related {
        ...PortfolioCard
      }
      url
      contact
    }
  }
`
