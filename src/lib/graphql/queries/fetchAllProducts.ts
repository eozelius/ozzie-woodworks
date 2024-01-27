export const fetchAllProductsQuery = `
  woodworkingEcommerceAppCollection(limit: 10) {
    items {
      id,
      description {
        json
      },
      title,
      dropbox,
      craftsperson {
        sys {id}
      }
      photosCollection {
        items {
          url,
          title,
          description,
          fileName
        }
      }
    }
  }
`
