const { Integer, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    apartmentName: {
      type: Text,
      isRequired: true,
    },
    image: {
      type: Text,
      isRequired: true,
    },
    imageAltText: {
      type: Text,
      isRequired: true,
    },
    streetAddress: {
      type: Text,
      isRequired: true,
    },
    price: {
      type: Integer,
      isRequired: true,
    },
  },
  labelField: "apartmentName",
};
