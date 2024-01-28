import Image from 'next/image'
import { useContentfulHomepageQuery } from '@/hooks/useContentfulHomepageQuery'
import './page.styles.css'
import { AddToCartButton } from '@/components/addToCartButton'

export default async function Home() {
  const { products, craftsPeople, homePageAssets } = await useContentfulHomepageQuery()
  // console.log('[ Home ] render() products => ', JSON.stringify(products[0].description.json.content[0]))
  // console.log('[ Home ] render() craftsPeople => ', JSON.stringify(craftsPeople))
  // console.log('[ Home ] render() ozziesMiscWoodworking => ', JSON.stringify(ozziesMiscWoodworking))
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Banner */}
      <div id="banner_contianer">
        <h1>{homePageAssets.bannerTitle}</h1>

        <Image
          src={homePageAssets.bannerImage.url}
          alt={homePageAssets.bannerImage.fileName}
          width={homePageAssets.bannerImage.width}
          height={homePageAssets.bannerImage.height}
        />

        <h3>{homePageAssets.intro.json.content.map(contentContainer => {
          return contentContainer.content.map(c => c.value)
        })}</h3>
      </div>


      <div id="products_container">
        {/* Products */}
        <h1>All Products</h1>
        {products && products.length && products.map((product: any, idx: number) => (
          <div className="products-list-item-container" key={idx}>
            {/* Title */}
            <h3>{product.title}</h3>

            {/* {product.description} */}

            {/* Description */}
            {product.description.json.content &&
              product.description.json.content.map((c: any, cdx: number) => {
                return (
                  <div className="description-container" key={cdx}>
                    {c &&
                      c.content &&
                      c.content.length &&
                      c.content.map((p: any, pdx: number) => (
                        <p key={pdx}>{p.value}</p>
                      ))}
                  </div>
                )
              })}

            {/* CraftsPerson: todo, interestingly refernces fields are not coming back completely hydrated, the best I can do is get the ID. */}

            <AddToCartButton productId={product.id} />
          </div>
        ))}
      </div>
    </main>
  )
}
