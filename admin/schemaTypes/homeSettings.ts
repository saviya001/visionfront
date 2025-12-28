export default {
  name: 'homeSettings',
  title: 'Home Page Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Settings Title (e.g., Main Page Config)',
      type: 'string',
    },
    

    {
      name: 'productSectionTitle',
      title: 'Product Section Title',
      type: 'string',
      initialValue: 'Our Signature Products',
    },
    {
      name: 'productSectionImage',
      title: 'Product Section Image',
      type: 'image',
      description: 'Upload the marketing banner/image for the Product box',
      options: { hotspot: true },
    },


    {
      name: 'clientSectionTitle',
      title: 'Client Section Title',
      type: 'string',
      initialValue: 'Client Success Stories',
    },
    {
      name: 'clientSectionImage',
      title: 'Client Section Image',
      type: 'image',
      description: 'Upload the best image to showcase client work',
      options: { hotspot: true },
    },
  ],
}