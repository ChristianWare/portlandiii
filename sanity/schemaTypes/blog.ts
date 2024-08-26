import {Rule} from 'sanity'

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Blog Article',
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of you blog article',
      validation: (Rule: Rule) => Rule.required().error('Required'),
      options: {
        source: 'title',
      },
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
      validation: (Rule: Rule) => Rule.required().error('Required'),
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      validation: (Rule: Rule) => Rule.required().error('Required'),
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [{type: 'text', name: 'alt', title: 'Alt'}],
        },
      ],
    },
  ],
}
