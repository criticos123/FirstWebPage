export default {
  name: "rental",
  title: "Rental",
  type: "document",
  fields: [
    {
      name: "apartmentName",
      title: "Apartment Name",
      type: "localeString",
    },
    {
      name: "imageFront",
      title: "Front Image",
      type: "image",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          title: "Image",
          type: "imageWithAlt",
        },
      ],
    },
    {
      name: "streetAddress",
      title: "Street Address",
      type: "string",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "video",
      title: "Video",
      type: "string",
    },
    {
      name: "availability",
      title: "Availability",
      type: "string",
    },
 
  ],
  preview: {
    select: {
      title: "apartmentName",
      imageFront: "imageFront",
    },
    prepare({ title, imageFront }) {
      return {
        title: title["en"],
        media: imageFront,
      };
    },
  },
};
