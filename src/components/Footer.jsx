import {  Link } from "gatsby"
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {

const width = 70
  return (
    <div>

    <footer class=" text-gray-600 px-6 lg:px-12 py-12 sm:px-0">
      <div class="mx-auto ">
      <div class="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4">

        <nav class="flex flex-wrap mx-auto justify-center space-x-6"> 
          <div class="max-w-screen-xl mx-auto lg:mb-12 ">
          <StaticImage src="../images/black-logo.png" alt="Hero Header" width={width} quality="100" layout="fixed" placeholder="blurred"/>
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
            <Link to="/categories"><span class="font-normal lg:text-base text-sm hover:text-gray-400">Project Type</span></Link>
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
              <a href="https://submit.srishtiarchive.com" class="font-normal text-sm lg:text-base underline font-ibm-mono decoration-solid hover:text-gray-400">Submission Form</a>
            </li>
           
          </ul>
        </nav>
      </div>
      <div class="text-center">
        <h5 class="lg:text-xl font-semibold text-gray-700">Other</h5>

        <nav class="mt-4">
          <ul class="space-y-2">
          
            <li>
            <Link to="/why"><span class="font-normal text-sm lg:text-base hover:text-gray-400">Why?</span></Link>
            </li>
            <li>
            <Link to="/faq"><span class="font-normal text-sm lg:text-base hover:text-gray-400">FAQ</span></Link>
            </li>
            <li>
            <Link to="/contact"><span class="font-normal text-sm lg:text-base hover:text-gray-400">Contact and Contributing</span></Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p class="text-xs lg:text-base">&copy; 2021 A <span class="font-semibold "><a href="https://theyellipages.in">The Yelli Pages</a></span> Project</p>
        <p class="pt-4 text-mxs lg:text-mxs text-center">Designed and Developed by <a href="https://instagram.com/thedivtagguy"  rel="noreferrer" target="_blank"><span class=" font-semibold">Aman Bhargava</span></a></p>

        <a href="https://github.com/thedivtagguy/srishtiarchive-v2/">
        <button class="lg:text-mxs bg-accent-gray tracking-wider text-xxs text-white mt-4 lg:ml-2 sm:ml-2 font-semibold py-2 lg:px-4 px-2 rounded-lg  mx-auto hover:bg-purple-700 ">
          Improve this site on Github</button>
        </a>
      </div>
    </div>
    <p class="pt-4 mx-auto text-mxs lg:text-mxs text-center">With 99.99% better uptime than any other Srishti website <span role="img" aria-label="Peace Sign">✌️</span></p>
    <p class="pt-4 mx-auto text-mxs lg:text-xs text-center"> By using the Archive, students agree to adhere to <a href="http://srishtimanipalinstitute.in/policies/srishti-policy-on-ethical-conduct-and-practice"  rel="noreferrer" target="_blank" class=" font-bold">Srishti Manipal's Policy on Ethical Conduct and Practice</a></p>

</div>
  </footer>

  </div>
  )
}


export default Footer
