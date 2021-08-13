const { Text, Password } = require("@keystonejs/fields");

module.exports = {
  fields: {
    username: { type: Text },
    password: { type: Password },
  },
  labelField: "username",
};
