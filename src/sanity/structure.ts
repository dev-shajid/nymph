import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Landing Page Sections')
    .items([
      S.documentTypeListItem('stat').title('Statistics'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('clientLogo').title('Client Logos'),
    ])
