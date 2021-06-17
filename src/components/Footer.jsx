import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Footer = () => {
  const {
    site: {
      meta: { links },
    },
  } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        meta: siteMetadata {
          links {
            facebook
            instagram
            pinterest
            twitter
          }
        }
      }
    }
  `)

  return (
    <div>

    <footer class="bg-gray-100 text-gray-600 px-6 lg:px-12 py-12 sm:px-0">
      <div class="mx-auto ">
      <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4">

        <nav class="flex flex-wrap mx-auto justify-center space-x-6"> 
          <div class="max-w-screen-xl mx-auto lg:mb-12 ">
            <img class="h-24 mx-auto" src="https://gist.githubusercontent.com/thedivtagguy/2c01b35a5e135a3672e3dc7960c9ff1f/raw/1af366d31a33bac0bdce64493c32fc752cef096d/logo.svg" alt="UptimeMate logo">
          </img>
          </div>
          <a href="#" class="font-bold text-black mt-6 text-3xl hover:text-gray-600 mb-2">Srishti  Archive</a>
         
        </nav>
       
      </div>
   
    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8 px-4 text-center sm:grid-cols-3">
      <div>
        <h5 class="text-xl font-semibold text-gray-700">Categories</h5>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li>
              <a href="/major" class="font-normal text-base hover:text-gray-400">Majors</a>
            </li>
            <li>
              <a href="/year" class="font-normal text-base hover:text-gray-400">Years</a>
            </li>
            <li>
              <a href="/tools" class="font-normal text-base hover:text-gray-400">Tools</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h5 class="text-xl font-semibold text-gray-700 text-center">Submissions</h5>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li>
              <a href="#" class="font-normal text-base hover:text-gray-400">Submission Guidelines</a>
            </li>
            <li>
              <a href="#" class="font-normal text-base hover:text-gray-400">Submission Form</a>
            </li>
           
          </ul>
        </nav>
      </div>
      <div class="text-center">
        <h5 class="text-xl font-semibold text-gray-700"></h5>

        <nav class="mt-4">
          <ul class="space-y-2">
          
            <li>
              <a href="#" class="font-normal text-base hover:text-gray-400">Anti-Plagiarism Note</a>
            </li>
            <li>
              <a href="#" class="font-normal text-base hover:text-gray-400">Terms and Conditions</a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p>&copy; 2021 A <strong><a href="https://theyellipages.in">The Yelli Pages</a></strong> Project</p>
        <p class="pt-4 text-xs text-center">Developed and Maintained by Aman Bhargava</p>

        <a href="https://github.com/thedivtagguy/srishtiarchive/">
        <button class="text-xs text-white mt-4 lg:ml-2 sm:ml-2 font-semibold py-2 px-4 rounded-full mx-auto bg-gray-800 hover:bg-gray-700">
          Edit this Page on Github</button>
        </a>
      </div>
    </div>
    
</div>
  </footer>

  </div>
  )
}


export default Footer
