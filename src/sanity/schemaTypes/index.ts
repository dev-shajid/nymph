import { type SchemaTypeDefinition } from 'sanity'

import { statType } from './statType'
import { testimonialType } from './testimonialType'
import { clientLogoType } from './clientLogoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [statType, testimonialType, clientLogoType],
}
