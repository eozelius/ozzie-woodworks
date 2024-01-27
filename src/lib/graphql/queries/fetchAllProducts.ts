export const fetchAllProductsQuery = `
  woodworkingEcommerceAppCollection(limit: 10) {
    items {
      id,
      description {
        json
      },
      title
    }
  }
`