import {  Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {

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
   
    <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-8 px-4 py-4 text-center grid-cols-2">
      <div>
        <h5 class="lg:text-xl text-base font-semibold text-gray-700">Categories</h5>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li>
            <Link to="/majors"><span class="font-normal lg:text-base text-sm hover:text-gray-400">Majors</span></Link>
            </li>
            <li>
            <Link to="/years"><span class="font-normal lg:text-base text-sm hover:text-gray-400">Years</span></Link>
            </li>
            <li>
            <Link to="/tools"><span class="font-normal lg:text-base text-sm hover:text-gray-400">Tools</span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h5 class="lg:text-xl text-base font-semibold text-gray-700 text-center">Submissions</h5>
        <nav class="mt-4">
          <ul class="space-y-2">
            <li>
            <Link to="/guidelines"><span class="font-normal text-sm lg:text-base hover:text-gray-400">Submission Guidelines</span></Link>
            </li>
            <li>
              <a href="https://submit.srishtiarchive.com" class="font-normal text-sm lg:text-base hover:text-gray-400">Submission Form</a>
            </li>
           
          </ul>
        </nav>
      </div>
      <div class="text-center">
        <h5 class="text-xl font-semibold text-gray-700">Other</h5>

        <nav class="mt-4">
          <ul class="space-y-2">
          
            <li>
            <Link to="/why"><span class="font-normal text-base hover:text-gray-400">Philosophy</span></Link>
            </li>
            <li>
            <Link to="/faq"><span class="font-normal text-base hover:text-gray-400">License and Legal</span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p class="text-xs lg:text-base">&copy; 2021 A <strong><a href="https://theyellipages.in">The Yelli Pages</a></strong> Project</p>
        <p class="pt-4 text-mxs lg:text-xs text-center">Designed and Developed by Aman Bhargava</p>

        <a href="https://github.com/thedivtagguy/srishtiarchive-v2/">
        <button class="text-mxs text-white mt-4 lg:ml-2 sm:ml-2 font-semibold py-2 px-4 rounded-sm  mx-auto border-gradient-br-pink-red-yellow-accent-gray border-transparent border-solid border-1 duration-500 lg:transform md:transform hover:-translate-y-1 hover:scale-20 transform-none">
          Improve this site on Github</button>
        </a>
      </div>
    </div>
    <p class="pt-4 mx-auto text-xs text-center">99.99% better uptime than any other Srishti website <span role="img" aria-label="Peace Sign">✌️</span></p>
    <p class="pt-4 mx-auto text-mxs text-center"> By using the Archive, students agree to adhere to <a href="http://srishtimanipalinstitute.in/policies/srishti-policy-on-ethical-conduct-and-practice" target="_blank" class="highlight-text font-bold">Srishti Manipal's Policy on Ethical Conduct and Practice</a></p>

</div>
  </footer>

  </div>
  )
}


export default Footer
