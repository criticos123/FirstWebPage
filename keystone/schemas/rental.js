
const {Integer, Text } = require("@keystonejs/fields");

module.exports = {
  fields: {
    apartmentName: {
      type: Text,
      isRequired: true,
    },
      
    imageFront: {
      type: Text,
      isRequired: true,
    },
    imageKitchen: {
      type: Text,
      isRequired: true,
    },
    imageBedroom: {
      type: Text,
      isRequired: true,
    },
    imageBathroom: {
      type: Text,
      isRequired: true,
    },
    imageLivingroom: {
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
