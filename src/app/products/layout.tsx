import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Ozzie Woodworking - Products',
  description: 'Ozzie Woodworking - Products Page, lists all available products',
}

export default function ProductsLayout ({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <div id="products_layout">
      {children}
    </div>
  )
}
