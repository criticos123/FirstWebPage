export default {
  title: "Image With Alt",
  name: "imageWithAlt",
  type: "object",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "description",
      title: "Description",
      type: "localeString",
      options: {
        isHighlighted: true,
      },
    },
  ],
};
