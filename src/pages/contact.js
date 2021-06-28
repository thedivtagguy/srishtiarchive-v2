import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const Contact = ({ data }) => (
  <Layout>
    <SiteMetadata title="Contact and Help" description="Help and Support for the Srishti Archive" />

<section class="px-2 lg:py-20 h-full md:px-0">
    <div class="flex justify-center items-center flex-col max-w-6xl px-5 mx-auto space-y-6 text-center">
    <h2 class="m-0 text-4xl font-extrabold w-4/5 leading-tight border-0 highlight-text mx-auto border-gray-300 lg:text-5xl md:text-2xl">
               Contact
            </h2>
        <p class="w-full mx-auto text-base text-left leading-8 text-light-gray sm:text-sm lg:text-xl md:max-w-3xl md:text-center">
            If you'd like to reach out for support regarding submissions, errors, updating your entries, offers for help, joining the editorial team, general complaints, flowery praises, and other questions; reach out to me a <span class="highlight-border rounded-md px-2 py-1">amanbhargava2001[at]gmail[dot]com</span>.
        </p>
       
        <p class="w-full mx-auto text-base text-left text-light-gray leading-8 sm:text-sm lg:text-xl md:max-w-3xl md:text-center">
        <span class="highlight-border rounded-md px-2 py-1">Srishti Archive is an open-source, collaborative design project</span>, we'd love your help. Treat the proposal like ordering at McDonald's, it's better if you decide what you want before you end up at the counter. If you're writing to collaborate, please mention what you'll be contributing and how you can help. For example, do the buttons look stupid to you? Share a better design and I'll try to code it in.<br></br> <br></br> For technical contributions, check out the <a href="https://github.com/thedivtagguy/srishtiarchive-v2/"  rel="noreferrer" target="_blank"><span class="bg-accent-gray text-light-gray highlight-border px-2 py-1 rounded-md"> 🔗 Github repository</span></a> and see if the source makes sense. Submit a pull request and we'll merge it if it is useful.
        </p>
    </div>    
</section>

  </Layout>
)

export default Contact
