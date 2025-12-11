import { defineField, defineType } from 'sanity'

export const statType = defineType({
    name: 'stat',
    title: 'Statistic',
    type: 'document',
    fields: [
        defineField({
            name: 'value',
            title: 'Value',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: 'suffix',
            title: 'Suffix',
            type: 'string',
            description: 'Optional: e.g., "+", "%", "K", etc. Leave empty for just the number',
            validation: (Rule) => Rule.max(5),
        }),
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which this stat appears (lower numbers appear first)',
            initialValue: 1,
            validation: (Rule) => Rule.required().min(0),
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
            value: 'value',
            suffix: 'suffix',
            label: 'label',
            order: 'order',
        },
        prepare({ value, suffix, label, order }) {
            return {
                title: `${value}${suffix || ''} - ${label}`,
                subtitle: `Order: ${order}`,
            }
        },
    },
})
