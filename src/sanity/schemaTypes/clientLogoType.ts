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
            name: 'logoImage',
            title: 'Logo Image (Optional)',
            type: 'image',
            description: 'Upload company logo image. If provided with company name, image will appear before text.',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'showText',
            title: 'Show Company Name',
            type: 'boolean',
            description: 'Display the company name as text alongside or instead of the logo',
            initialValue: true,
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
            logoImage: 'logoImage',
            showText: 'showText',
            order: 'order',
            isActive: 'isActive',
        },
        prepare({ name, logoImage, showText, order, isActive }) {
            const hasImage = !!logoImage
            const typeEmoji = hasImage && showText ? '🖼️📝' : hasImage ? '🖼️' : '📝'
            return {
                title: name,
                subtitle: `${typeEmoji} - Order: ${order}${!isActive ? ' (Inactive)' : ''}`,
                media: logoImage,
            }
        },
    },
})
