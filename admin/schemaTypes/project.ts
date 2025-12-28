export default {
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    

    {
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          { title: 'Company Product (Our Own)', value: 'product' },
          { title: 'Client Project (For Others)', value: 'client' },
        ],
        layout: 'radio'
      },
      validation: (Rule: any) => Rule.required(),
    },

    // --- Single Page Content (Rich Text) ---
    {
      name: 'content',
      title: 'Full Project Details',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },

    {
      name: 'link',
      title: 'Live Link',
      type: 'url',
    },
  ],
}