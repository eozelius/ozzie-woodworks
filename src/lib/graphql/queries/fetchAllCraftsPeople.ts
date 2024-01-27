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
      },
      profilePhoto {
        url,
        fileName,
        title,
        description
      }
    }
  }
`