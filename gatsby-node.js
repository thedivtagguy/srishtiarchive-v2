const path = require(`path`)
const _ = require('lodash');
const { Z_UNKNOWN } = require('zlib');


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
      course: String
      urls: [String]
      category: String
      groupmembers: [String]
      
      thumbnailUrl: String
      featured: Boolean
    }
    type ContentfulPortfolio implements Node {
      description: contentfulPortfolioDescriptionTextNode
      id: ID!
      name: String!
      slug: String!
      major: String!
      files: [ContentfulAsset]
      author: String!
      tools: [String]!
      year: String!
      contact: String
      urls: [String]
      course: String
      category: String
      groupmembers: [String]
      thumbnailUrl: String
      featured: Boolean
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
            year
            name
            major
            category
            author
            groupmembers
            course
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
      if (process.env.gatsby_executing_command.includes('develop')) {
        if (data && data.portfolio) {
          const component = path.resolve("./src/templates/thumbnail.js")
          data.portfolio.nodes.map(({ slug }) => {
            createPage({
              path: `/${slug}/thumbnail`,
              component,
              context: { slug },
            })
          })
        }
      }
       
      const toolNodes = data.portfolio.nodes;
     
      const tagTemplate = path.resolve(`src/templates/tagsTemplate.js`);
      const yearTemplate = path.resolve(`src/templates/yearTemplate.js`);
      const majorTemplate = path.resolve(`src/templates/majorTemplate.js`);
      const categoryTemplate = path.resolve(`src/templates/categoryTemplate.js`);
      const authorTemplate = path.resolve(`src/templates/authorTemplate.js`);


      let tags = [];
      let tools = [];
      let year = [];
      let major = [];
      let categories = [];
      let groupmembers = [];
      let category = []
      let years =[];
      let majors =[];
      let authors =[];
      let author = [];


      // Iterate through each post, putting all found tags into `tags`
      toolNodes.map(toolNode => tags.push(...toolNode.tools));  
      toolNodes.map(toolNode => years.push(toolNode.year));  
      toolNodes.map(toolNode => majors.push(toolNode.major));  
      toolNodes.map(toolNode => categories.push(toolNode.category));  
      toolNodes.map(toolNode => authors.push(toolNode.author));  
      toolNodes.map(toolNode => groupmembers.push(toolNode.groupmembers));
      // check if groupmembers if not empty


  
 
    
      tags = tags.concat(tools);
      years = years.concat(year);
      majors = majors.concat(major);
      categories = categories.concat(category);
      authors = authors.concat(author);
      // Eliminate duplicate tags
      tags = _.uniq(tags);
      years = _.uniq(years);
      majors = _.uniq(majors);
      categories= _.uniq(categories);
      authors= _.uniq(authors);
      // Append the items in groupmembers to the authors array
      

       // Make tools pages
       tags.forEach(tag => {
        createPage({
          path: `/tools/${_.kebabCase(tag)}/`,
          component: tagTemplate,
          context: {
            tag
          },
        });
      });
      
      console.log("Created Pages For " + tags)

      // Make year pages
      years.forEach(y => {
        createPage({
          path: `/years/${_.kebabCase(y)}/`,
          component: yearTemplate,
          context: {
            y
          },
        });
      });
      console.log("Created Pages For " + years)

      // Make major pages
      majors.forEach(m => {
        createPage({
          path: `/majors/${_.kebabCase(m)}/`,
          component: majorTemplate,
          context: {
            m
          },
        });
      });
      console.log("Created Pages For " + majors)

      // Make category pages
      categories.forEach(c => {
        createPage({
          path: `/categories/${_.kebabCase(c)}/`,
          component: categoryTemplate,
          context: {
            c
          },
        });
      });
      console.log("Created Pages For " + categories)
      
     

     // Make author pages
     authors.forEach(a => {
       console.log("Creating for", a);
      createPage({
        path: `/authors/${_.kebabCase(a)}/`,
        component: authorTemplate,
        context: {
          a
        },
      });
    });


    
    console.log("Created Pages For " + authors)

      resolve()
    })
  })
}


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: "empty",
    },
  })
}