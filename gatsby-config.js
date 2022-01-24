require("dotenv").config()

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env

if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  )
}

module.exports = {
  siteMetadata: {
    menu: [
      { name: "📦 Home", to: "/" },
      { name: "❓ FAQ", to: "/faq" },
      { name: "✨Submit✨", to:"https://submit.srishtiarchive.com"},

    ],
    title: `Srishti Archive`,
    description: `Srishti Archive is a permanent gallery of projects by students at Srishti.`,
    heroButtons: [
      { text: "HCD", link: "/majors/hcd" },
      { text: "BSSD", link: "/majors/bssd" },
      { text: "VCSB", link: "/majors/vcsb" },
      { text: "IADP", link: "/majors/iadp" },
      { text: "CAC", link: "/majors/cac" },
      { text: "CAP", link: "/majors/cap" },
      { text: "DMA", link: "/majors/dma" },
      { text: "IAIDP", link: "/majors/iaidp" },
    ],
    locale: "en",
    author: `@thedivtagguy`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: CONTENTFUL_SPACE_ID,
        accessToken: CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint: process.env.MAILCHIMP_ENDPOINT,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `John Doe`,
        short_name: `johndoe`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3182ce`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
        settings: {
          attributesForFaceting: [
            `major`,
            `tools`,
            `year`,
            `category`,
          ]
        }
      },
    },
  ],
}
