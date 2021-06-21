import { graphql, Link } from "gatsby"
import React from "react"

export default props => {
  const {
    name,
    min = 1,
    max = 50,
    no = Math.floor(Math.random() * (max - min + 1)) + min,
    major,
    year,
    image= "/backgrounds/",
    divstyle = {backgroundImage: 'url("'+ image + no + '.jpg")'}
  } = props.data.item
  console.log(divstyle)
  
  return (

      
          <body id="image" style={{ backgroundImage: `url("/backgrounds/${no}.jpg")`, backgroundSize: 'cover' }}>
            <div class="p-4 h-full">
              <div className={`border-4  border-black flex h-full justify-start px-8 items-center`} >
                  <div class="">
                    <div className={`bg-transparent py-2 mx-4`}>
                    <img alt="Logo" className="w-12 md:w-12" src="/black-logo.png" />
                      <div className="flex justify-start items-start">
                          <div className="flex justify-start items-start">
                            <div className="w-full">
                                <h1 className="text-5xl py-2 leading-tight font-extrabold w-30 break-words tracking-tight text-gray-900 sm:text-2xl mb-1">
                                  {name}
                                </h1>
                                <div className="flex flex-wrap space-x-4 flex-row justify-start items-start">
                                  <h3 className="lg:text-2xl border-t-4 pt-1 border-gray-900  border-gray-600 leading-tight font-extrabold tracking-tight text-gray-900 sm:text-xl ">
                                      {major}
                                  </h3>
                                  <h3 className="lg:text-2xl border-t-4 pt-1 border-gray-900  border-gray-600 leading-tight font-extrabold tracking-tight text-gray-900 sm:text-xl ">
                                      {year}
                                  </h3>
                                </div>
                            </div>
              
                          </div>
                         </div>
                       </div>
                  </div>
              </div>
            </div>
          </body>

         
        
  )
}

export const query = graphql`
  query Thumbnail($slug: String!) {
    item: contentfulPortfolio(slug: { eq: $slug }) {
      major  
      author
      name
      year
    }
  }
`
