export const fetchAllCraftsPeopleQuery = `
  craftspersonBioCollection(limit: 5) {
    total,
    limit,
    skip,
    items {
      craftsPersonId,
      name,
      description {
        json,
        links {
          entries {
            inline {
              contentfulMetadata {
                tags {
                  id, name
                }
              }
            }
          },
          assets {
            hyperlink {
              title, description, contentType, fileName, url
            },
            block {
              title, description, contentType, fileName, url
            }
          }
        }
      }
    }
  }
`