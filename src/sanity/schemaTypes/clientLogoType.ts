import { defineField, defineType } from 'sanity'

export const clientLogoType = defineType({
    name: 'clientLogo',
    title: 'Client Logo',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'logoType',
            title: 'Logo Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Text Only', value: 'text' },
                    { title: 'Image', value: 'image' },
                ],
                layout: 'radio',
            },
            initialValue: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logoImage',
            title: 'Logo Image',
            type: 'image',
            description: 'Upload company logo image',
            options: {
                hotspot: true,
            },
            hidden: ({ parent }) => parent?.logoType !== 'image',
            validation: (Rule) =>
                Rule.custom((logoImage, context) => {
                    const logoType = (context.parent as any)?.logoType
                    if (logoType === 'image' && !logoImage) {
                        return 'Logo image is required when logo type is Image'
                    }
                    return true
                }),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which this logo appears (lower numbers appear first)',
            initialValue: 1,
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            description: 'Toggle to show/hide this client logo',
            initialValue: true,
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            name: 'name',
            logoType: 'logoType',
            logoImage: 'logoImage',
            order: 'order',
            isActive: 'isActive',
        },
        prepare({ name, logoType, logoImage, order, isActive }) {
            return {
                title: name,
                subtitle: `${logoType === 'image' ? '🖼️ Image' : '📝 Text'} - Order: ${order}${!isActive ? ' (Inactive)' : ''}`,
                media: logoType === 'image' ? logoImage : undefined,
            }
        },
    },
})
