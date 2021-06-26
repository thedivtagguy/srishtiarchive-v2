const indexName = `archives`

const pageQuery = `{
    pages: allContentfulPortfolio {
        edges {
          node {
            id
            major
            name
            course
            contact
            author
            year
            slug
            category
            tools
            description {
              description
            }
          }
        }
      }
}`

function pageToAlgoliaRecord({ node: { id, major, name, slug, category, course, contact, author, year, tools, description, ...rest } }) {
  return {
    objectID: id,
    major,
    name,
    slug,
    course,
    contact,
    category,
    author,
    year,
    tools,
    description,
    ...rest,
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`],
                attributesForFaceting: [
                  `major`,
                  `tools`,
                  `year`,
                  `category`,
                ]
  },
  },
]

module.exports = queries