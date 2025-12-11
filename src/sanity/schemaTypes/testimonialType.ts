import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required().min(20).max(500),
        }),
        defineField({
            name: 'author',
            title: 'Author Name',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'role',
            title: 'Role/Position',
            type: 'string',
            validation: (Rule) => Rule.required().max(150),
        }),
        defineField({
            name: 'company',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'avatar',
            title: 'Avatar Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which this testimonial appears (lower numbers appear first)',
            initialValue: 1,
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            description: 'Toggle to show/hide this testimonial',
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
            author: 'author',
            company: 'company',
            avatar: 'avatar',
            order: 'order',
            isActive: 'isActive',
        },
        prepare({ author, company, avatar, order, isActive }) {
            return {
                title: author,
                subtitle: `${company} - Order: ${order}${!isActive ? ' (Inactive)' : ''}`,
                media: avatar,
            }
        },
    },
})
