import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Ozzie Woodworks - Craft Persons',
  description: 'Ozzie Woodworks - Craft Persons Page, lists all Crafts Persons',
}

export default function CraftsPersonLayout ({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <div id="crafts_person_layout">
      {children}
    </div>
  )
}
