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
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'smallDescription', 
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
       
          { title: 'Signature Product (Our Software)', value: 'signature' },
          { title: 'Client Success Story (Client)', value: 'client' },
        ],
        layout: 'radio'
      },
      validation: (Rule) => Rule.required(),
    },

    // --- Single Page Content (Rich Text) ---
    {
      name: 'content',
      title: 'Full Project Details',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'link',
      title: 'Live Link',
      type: 'url',
    },
  ],
}