import type { Metadata } from 'next'
import '../../globals.css'

export const metadata: Metadata = {
  title: 'Ozzie Woodworks - Single Product',
  description: 'Ozzie Woodworks - Single Product Page', // todo: interpolate product name/description
}

export default function SingleProductPage ({ params }: { params: { id: string } }) {

  console.log('[ SingleCraftsPersonPage ] render() params => ', params)
  
  return (
    <div id="singel_product_page">
      <h2>Single Product Page</h2>
    </div>
  )
}
