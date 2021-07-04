const indexName = `archives`

const pageQuery = `{
    pages: allContentfulPortfolio {
        edges {
          node {
            id
            major
            name
            course
            groupmembers
            contact
            author
            year
            slug
            thumbnailUrl
            category
            featured
            tools
            description {
              description
            }
          }
        }
      }
}`

function pageToAlgoliaRecord({ node: { id, major, groupmembers, featured, thumbnailUrl, name, slug, category, course, contact, author, year, tools, description, ...rest } }) {
  return {
    objectID: id,
    major,
    name,
    slug,
    course,
    featured,
    contact,
    category,
    thumbnailUrl,
    author,
    year,
    groupmembers,
    course,
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
                  `featured`,
                ]
  },
  },
]

module.exports = queries