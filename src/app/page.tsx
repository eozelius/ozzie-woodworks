import Image from 'next/image'
import { useContentfulHomepageQuery } from '@/hooks/useContentfulHomepageQuery'
import './page.styles.css'

export default async function Home() {
  const { products, craftsPeople, homePageAssets } = await useContentfulHomepageQuery()

  // console.log('[ Home ] render() products => ', JSON.stringify(products))
  // console.log('[ Home ] render() craftsPeople => ', JSON.stringify(craftsPeople))
  // console.log('[ Home ] render() ozziesMiscWoodworking => ', JSON.stringify(ozziesMiscWoodworking))
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
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
            <div className="products-list-container" key={idx}>
              {/* Title */}
              <h3>{product.title}</h3>

              {/* Description */}
              {product.description.content &&
                product.description.content.map((c: any, cdx: number) => {
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
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
