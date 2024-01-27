import axios from 'axios'

import { fetchAllProductsQuery } from '@/lib/graphql/queries/fetchAllProducts'
import { fetchAllCraftsPeopleQuery } from '@/lib/graphql/queries/fetchAllCraftsPeople'
import { fetchHomepageBanner } from '@/lib/graphql/queries/fetchHomepageBanner'

type TResponse = {
  products: any
  craftsPeople: any
  ozziesMiscWoodworking: any
}

const spaceId = process.env.CONTENTFUL_SPACE_ID
const apiKey = process.env.CONTENTFUL_API_KEY
const url = process.env.CONTENTFUL_GRAPHQL_URL
const composedQuery = `
  query {
    ${fetchAllProductsQuery}
    ${fetchAllCraftsPeopleQuery}
    ${fetchHomepageBanner}
  }
`

export async function useContentfulHomepageQuery(): Promise<TResponse> {
  let response

  try {
    response = await axios.post(`${url}/${spaceId}`, {
      query: composedQuery
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    })

    console.log('[ useCHomepageQ ] na() response => ', response.data.data)
  } catch (error) {
    // @ts-ignore
    console.error('caught error =>', error.response.data)
    return {
      // @ts-ignore
      products: [],
      craftsPeople: [],
      ozziesMiscWoodworking: {}
    }
  }

  return {
    // @ts-ignore
    products: response.data.data.woodworkingEcommerceAppCollection.items,
    craftsPeople: response.data.data.craftspersonBioCollection.items,
    ozziesMiscWoodworking: response.data.data.ozziesMiscWoodworking
  }
}
