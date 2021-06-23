import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

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
const width = 70
  return (
    <div>

    <footer class="bg-dark-gray text-gray-600 px-6 lg:px-12 py-12 sm:px-0">
      <div class="mx-auto ">
      <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4">

        <nav class="flex flex-wrap mx-auto justify-center space-x-6"> 
          <div class="max-w-screen-xl mx-auto lg:mb-12 ">
          <StaticImage src="../images/white-logo.png" alt="Hero Header" width={width} quality="100" layout="fixed" placeholder="blurred"/>
          </div>
         
        </nav>
       
      </div>
   
    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8 px-4 text-center sm:grid-cols-3">
      <div>
        <h5 class="text-xl font-semibold text-gray-700">Categories</h5>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li>
            <Link to="/majors"><span class="font-normal text-base hover:text-gray-400">Majors</span></Link>
            </li>
            <li>
            <Link to="/years"><span class="font-normal text-base hover:text-gray-400">Years</span></Link>
            </li>
            <li>
            <Link to="/tools"><span class="font-normal text-base hover:text-gray-400">Tools</span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h5 class="text-xl font-semibold text-gray-700 text-center">Submissions</h5>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li>
            <Link to="/guidelines"><span class="font-normal text-base hover:text-gray-400">Submission Guidelines</span></Link>
            </li>
            <li>
              <a href="https://submission-form.heroku.app" class="font-normal text-base hover:text-gray-400">Submission Form</a>
            </li>
           
          </ul>
        </nav>
      </div>
      <div class="text-center">
        <h5 class="text-xl font-semibold text-gray-700">Other</h5>

        <nav class="mt-4">
          <ul class="space-y-2">
          
            <li>
            <Link to="/philosophy"><span class="font-normal text-base hover:text-gray-400">Philosophy</span></Link>
            </li>
            <li>
            <Link to="/legal"><span class="font-normal text-base hover:text-gray-400">License and Legal</span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p>&copy; 2021 A <strong><a href="https://theyellipages.in">The Yelli Pages</a></strong> Project</p>
        <p class="pt-4 text-xs text-center">Designed and Developed by Aman Bhargava</p>

        <a href="https://github.com/thedivtagguy/srishtiarchivev2/">
        <button class="text-xs text-white mt-4 lg:ml-2 sm:ml-2 font-semibold py-2 px-4 rounded-sm  mx-auto border-gradient-br-pink-red-yellow-accent-gray border-transparent border-solid border-1 duration-500 lg:transform md:transform hover:-translate-y-1 hover:scale-20 transform-none">
          Improve this site on Github</button>
        </a>
      </div>
    </div>
    <p class="pt-4 mx-auto text-xs text-center">With 99.99% better uptime than any other Srishti website ✌️</p>

</div>
  </footer>

  </div>
  )
}


export default Footer
