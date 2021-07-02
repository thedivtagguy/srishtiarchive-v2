import { graphql } from "gatsby"
import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const Submit = ({ data }) => (
  <Layout>
    <SiteMetadata title="About" description="Sample description" />
   
<body class="bg-gray-100">

    <div class="max-w-screen-xl py-12  mx-12 flex flex-col md:flex-row justify-between items-center space-y-4">

        <nav class="flex flex-wrap mx-auto justify-center space-x-6"> 
          <div class="max-w-screen-xl mx-auto ">
            <img class="h-24 mx-auto" src="https://gist.githubusercontent.com/thedivtagguy/2c01b35a5e135a3672e3dc7960c9ff1f/raw/4068bebffeb9a39eeeffcc510c7628e5500cd375/logo.svg" alt="Srishti Archive Logo"/>
          </div>
          <a href="#" class="font-bold text-black mt-6 text-3xl hover:text-gray-600 mb-2">Srishti Archive</a>
         
        </nav>
       
      </div>
   
    <div class="mx-auto w-2/3 pb-20 bg-gray-100">
    
        <div class="px-20 pt-4 pb-10">
            <form id="form" class="container mx-auto bg-white shadow rounded" action="https://submit.srishtiarchive.com/" method="post" enctype="multipart/form-data">
                <div class="xl:w-full border-b border-gray-300 py-5">
                    <div class="flex justify-center items-center w-11/12 mx-auto">
                        <p class="text-xl text-gray-800 font-bold">Archive Entry Submission Form</p>   
                        <p class="w-2/3 pr-16 text-xs text-gray-800">Before submitting, <span class="font-bold ">please read the submission guidelines on the Guide page</span>.
                            Submissions not fitting the guidelines will not be included.</p>
                            <button href="https://srishtiarchive.com/data-musification-turning-books-into-music-0226" target="_blank" class="bg-indigo-700 w-30 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 mb-4 text-xs focus:outline-none" >View Example Submission</button>

                    </div>
                    
                </div>
              
                <div class="w-11/12 mx-auto">
                    <div class="container mx-auto">
                        <div class="my-8 mx-auto xl:w-full xl:mx-0">
                            <div class="xl:flex lg:flex md:flex flex-wrap justify-between">
                                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                    <label for="FirstName" class="pb-2 text-sm font-bold text-gray-800">Full Name  <span class="text-xs text-gray-400 font-normal block">Doe. John Doe.</span></label>
                                    <input type="text" required name="name"  id="name" class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="" />
                                </div>
                                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                    <label for="major" class="pb-2 text-sm font-bold text-gray-800">Major <span class="text-xs text-gray-400 font-normal block">Your major. If you're in 1st year, select Foundational Studies.</span></label>
                                    <div class="border border-gray-300 shadow-sm rounded flex relative">
                                        <select type="text" name="major"  id="major" class="bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700 text-gray-800 rounded">
                                                <option value="None">Select Program</option>
                                                <option value="FSP">Foundational Studies Program</option>
                                                <option value="HCD">Human Centered Design</option>
                                                <option value="CAC">Creative and Applied Computation</option>
                                                <option value="CE">Creative Education</option>
                                                <option value="VCSB">Visual Communication and Strategic Branding</option>
                                                <option value="FILM">Film</option>
                                                <option value="CAP">Contemporary Art Practices</option>
                                                <option value="BSSD">Business Systems and Service Design</option>
                                                <option value="IADP">Industrial Art and Design Practices</option>
                                                <option value="IAIDP">Information Arts and Information Design Practices</option>
                                                <option value="DMA">Digital Media Arts</option>
                                            </select>
                                        <div class="px-4 flex items-center border-l border-gray-300 flex-col justify-center text-gray-500 absolute right-0 bottom-0 top-0 mx-auto z-0">
                                            <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                                    <polyline points="6 15 12 9 18 15"/>
                                                </svg>
                                            <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                                    <polyline points="6 9 12 15 18 9"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                    <label for="year" class="pb-2 text-sm font-bold text-gray-800">Year of Study <span class="text-xs text-gray-400 font-normal block">Pretty Self-Explanatory</span></label>
                                    <div class="border border-gray-300 shadow-sm rounded flex relative">
                                        <select type="text" name="year" required id="year" class="bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700 text-gray-800 rounded">
                                                <option value="1st Year">1st year</option>
                                                <option value="2nd Year">2nd year</option>
                                                <option value="3rd Year">3rd year</option>
                                                <option value="4th year">4th year</option>
                                            </select>
                                        <div class="px-4 flex items-center border-l border-gray-300 flex-col justify-center text-gray-500 absolute right-0 bottom-0 top-0 mx-auto z-0">
                                            <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                                    <polyline points="6 15 12 9 18 15"/>
                                                </svg>
                                            <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                                    <polyline points="6 9 12 15 18 9"/>
                                                </svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                    <label for="email" class="pb-2 text-sm font-bold text-gray-800">Email <span class="text-xs text-gray-400 font-normal block">So we can contact you.</span></label>
                                    <div class="relative">
                                        <div class="absolute text-gray-600 flex items-center px-4 border-r h-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="20" height="20" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z"/>
                                                    <rect x="3" y="5" width="18" height="14" rx="2"/>
                                                    <polyline points="3 7 12 13 21 7"/>
                                                </svg>
                                        </div>
                                        <input id="email" name="email"  class="w-full text-gray-800 focus:outline-none focus:border focus:border-indigo-700 font-normal py-3 flex items-center pl-16 text-sm border-gray-300 rounded border" placeholder="example@gmail.com" />
                                    </div>
                                </div>
                            </div>
                            <div class="py-4 mb-8 border-b-2 border-gray-100"></div>

                           <div class="xl:flex lg:flex md:flex flex-wrap justify-between">
                            <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label for="projectname" class="pb-2 text-sm font-bold text-gray-800">Project Title <span class="text-xs text-gray-400 font-normal block">What is this project called?</span></label>
                                <input type="text" name="projectname"  id="projectname" class="border border-gray-200 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="Rebranding for The Knights of Who Say Ni" />
                            </div>
                            <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label for="project_category" class="pb-2 text-sm font-bold text-gray-800">Project Category <span class="text-xs text-gray-400 font-normal block">What category does your project fall under?</span></label>
                                <div class="border border-gray-300 shadow-sm rounded flex relative">
                                    <select type="text" name="project_category" required id="project_category" class="bg-transparent appearance-none z-10 pl-3 py-3 w-full text-sm border border-transparent focus:outline-none focus:border-indigo-700 text-gray-800 rounded">
                                            <option value="None">Select Category</option>
                                            <option value="Digital Media">Digital Media</option>
                                            <option value="Traditional Media">Traditional Media</option>
                                            <option value="Mixed Media">Mixed Media</option>
                                            <option value="Performance Art">Performance Art</option>
                                            <option value="Programming and Code">Programming and Code</option>
                                            <option value="Research and Writing">Research and Writing</option>
                                            <option value="Industrial and Product">Industrial and Product</option>
                                            <option value="Interfaces and Experiences">Interfaces and Experiences</option>

                                        </select>
                                        
                                    <div class="px-4 flex items-center border-l border-gray-300 flex-col justify-center text-gray-500 absolute right-0 bottom-0 top-0 mx-auto z-0">
                                        <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-up" width="16" height="16" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <polyline points="6 15 12 9 18 15"/>
                                            </svg>
                                        <svg tabindex="0" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="16" height="16" viewbox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z"/>
                                                <polyline points="6 9 12 15 18 9"/>
                                            </svg>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label for="course" class="pb-2 text-sm font-bold text-gray-800">Name of Course/Unit<span class="text-xs text-gray-400 font-normal block">What was the name of the unit this was completed in? This is NOT your major but the name of the course.</span></label>
                                <input type="text" name="course"  id="course" class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="Order and Chaos/Paneer and Tikka" />
                            </div>
                            <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label for="projectdescription" class="pb-2 text-sm font-bold text-gray-800">Project Description <span class="text-xs text-gray-400 font-normal block">Describe your project for complete new-comers <br/>(Minimum 300 Characters)</span></label>
                                <textarea type="text" class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="projectdescription" placeholder="Enter your description" name="projectdescription" rows="5" cols="40"> </textarea>
                            </div>
                            <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <label for="tools" class="pb-2 text-sm font-bold text-gray-800">Project Tools <span class="text-xs text-gray-400 font-normal block">What did you use to make this? Comma Separated. <br/> For example: Photoshop, Illustrator, Charcoal</span></label>
                                <input type="text" name="tools"  id="tools" class="border border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="" />
                            </div>

                         

                          
           
                        
                            <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <div class="flex flex-row">
                                    <input type="checkbox" class="m-2" id="myCheck2" onclick="myFunction2()"/>
                                    <label for="myCheck2" class="pb-2 text-sm font-bold text-gray-800">Do you have any external links?<span class="text-xs text-gray-400 font-normal block">Check box if true</span>
                                    </label>
                                </div>
                                <div id="text2" >

                                <label for="links" class="pb-2 text-sm font-bold text-gray-800">External Links<span class="text-xs text-gray-400 font-normal block">Any links associated with your project (Youtue videos, websites etc.) Separate with commas.<br/> For example: https://www.youtube.com/watch?v=dQw4w9WgXcQ</span></label>
                                <input type="text" name="links"  id="links" class="border w-full border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="Leave blank if none" />
                            </div>  
                            </div>

                            <div class="xl:w-2/5 lg:w-2/5 md:w-2/5 flex flex-col mb-6">
                                <div class="flex flex-row">
                                    <input type="checkbox" class="m-2" id="myCheck" onclick="myFunction()"/>
                                    <label for="myCheck" class="pb-2 text-sm font-bold text-gray-800">Is this a group project?<span class="text-xs text-gray-400 font-normal block">Check box if true</span>
                                    </label>
                                </div>
                                
                            <div id="text" >
                                <label for="group_m" class="pb-2 text-sm font-bold text-gray-800">Group Members<span class="text-xs text-gray-400 font-normal block">Group member names, comma separated.</span></label>
                                <input type="text" name="group_m"  id="group_m" class="border w-full border-gray-300 pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="Ramesh, Suresh, Five Star" />
                                </div>
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-start items-start mb-6">
                    <label for="files" class="w-full text-gray-700 text-sm font-semibold">Number of Files <span class="text-xs text-gray-400 font-normal block">How many files do you want to archive? Minimum 1, Max 4</span>
                    </label>
                    <input type="number" required min="1" max="4" name="filenumber"  id="files" class="border border-gray-300 pl-3 w-28 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 text-gray-800" placeholder="" />

                   
                    <a id="filldetails" class="my-4 bg-indigo-700 cursor-pointer transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 text-sm focus:outline-none"onclick="addFields()">Add Files</a>
                        <div id="container"></div>
                </div>
                
            <div class="flex flex-row">
                <label class="inline-flex items-center mt-3">
                    <input type="checkbox" required class="form-checkbox h-8 w-8 "/><span class="ml-2 text-xs text-gray-700 font-bold">I have read and agree to the <a class="text-indigo-500 underline"  href="http://srishtimanipalinstitute.in/policies/srishti-policy-on-ethical-conduct-and-practice" target="_blank">Srishti Manipal's Policy on Ethical Conduct and Practice </a>and agree to share this work under a <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target="_blank" class="text-indigo-500 underline">CC-BY-NC-SA license </a> if published.
                    </span>
                </label>
                    <div id="submitbutton" class="w-full py-4 mt-6 flex justify-end rounded-bl rounded-br">
                        <button  class="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-2 mb-4 text-sm focus:outline-none" type="submit">Submit to Archives</button>
                    </div>
            </div>
            </div>
            </form>
    
        </div>
        </div>
        
</body>


</Layout>
)

export default Submit


