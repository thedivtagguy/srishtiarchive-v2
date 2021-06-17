const path = require(`path`)
const _ = require('lodash');

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type contentfulPortfolioDescriptionTextNode implements Node {
      description: String
      major: String
      author: String
      tools: [String]
      files: [ContentfulAsset]
      contact: String
    }
    type ContentfulPortfolio implements Node {
      description: contentfulPortfolioDescriptionTextNode
      gallery: [ContentfulAsset]
      id: ID!
      name: String!
      related: [ContentfulPortfolio]
      slug: String!
      major: String!
      files: [ContentfulAsset]
      author: String!
      tools: [String]!
      year: String!
      thumbnail: ContentfulAsset
      url: String
      contact: String
    }
  `
  createTypes(typeDefs)
}



exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        portfolio: allContentfulPortfolio {
          nodes {
            slug
            tools
          }
        }
      }
    `).then(({ errors, data }) => {
      if (errors) {
        reject(errors)
      }

      if (data && data.portfolio) {
        const component = path.resolve("./src/templates/portfolio-item.jsx")
        data.portfolio.nodes.map(({ slug }) => {
          createPage({
            path: `/${slug}`,
            component,
            context: { slug },
          })
        })
      }
       
      const tools = data.portfolio.nodes.tools;
      console.log(tools)
      const tagTemplate = path.resolve(`src/templates/tagsTemplate.js`);
      let tags = [];
      // Iterate through each post, putting all found tags into `tags`
      tags = tags.concat(tools);
       // Eliminate duplicate tags
      tags = _.uniq(tags);
      
       // Make tag pages
       tags.forEach(tag => {
        createPage({
          path: `/tags/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        });
      });
      
       
      resolve()
    })
  })
}
