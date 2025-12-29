import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projectsCover',
  title: 'Projects Section Cover', 
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'E.g., Client Success Stories',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description for the card',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})