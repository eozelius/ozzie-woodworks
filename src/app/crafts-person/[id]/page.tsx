import type { Metadata } from 'next'
import '../../globals.css'

export const metadata: Metadata = {
  title: 'Ozzie Woodworks - Single Crafts Person',
  description: 'Ozzie Woodworks - Single Crafts Person Profile Page', // todo: interpolate craftsperson name/bio
}

// type TProps = {
//   params: {
//     id: string;
//   }
// }

// export default function SingleCraftsPersonPage<TProps> ({ params }): React.ReactNode {
export default function SingleCraftsPersonPage ({ params }: { params: { id: string } }) {

  console.log('[ SingleCraftsPersonPage ] render() params => ', params)
  
  return (
    <div id="single_crafts_person_page">
      <h2>Single Crafts Person Page</h2>
    </div>
  )
}
