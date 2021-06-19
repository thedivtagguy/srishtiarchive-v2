import { graphql, Link } from "gatsby"
import React from "react"

export default props => {
  const {
    name,
    major,
    year,
    color = ["bg-red-600", "bg-purple-600", "bg-blue-600"],
  } = props.data.item

  return (

      
          <body id="image" className={`border-red-800 rounded-lg border-dashed border-4 m-4 flex px-12 justify-start items-center bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600`} >
              <div className={`bg-transparent h-1/2 py-2 mx-4`}>
              <img alt="Logo" className="w-16 md:w-16" src="/white-logo.png" />

                <div className="flex justify-start items-center">
                    <div className="flex justify-center items-center">
                      <div className="w-full pb-8">
                          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-white sm:text-5xl mb-1">
                            {name}
                          </h1>
                          <div className="flex flex-wrap  flex-col justify-start items-start">
                            <h3 className="text-2xl leading-tight font-extrabold tracking-tight text-white sm:text-2xl mb-1">
                               Aman Bhargava
                            </h3>
                            <h3 className="lg:text-xl border-gray-600 leading-tight font-extrabold tracking-tight text-gray-700 sm:text-xl ">
                                {year}, {major}
                            </h3>
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
