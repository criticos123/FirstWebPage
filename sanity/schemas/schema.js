import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import localeString from "./localeString";
import imageWithAlt from "./imageWithAlt";
import rental from "./rental";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([imageWithAlt, localeString, rental]),
});
