const { Keystone } = require("@keystonejs/keystone");
const { GraphQLApp } = require("@keystonejs/app-graphql");
const { AdminUIApp } = require("@keystonejs/app-admin-ui");
const { MongooseAdapter: Adapter } = require("@keystonejs/adapter-mongoose");
const { PasswordAuthStrategy } = require("@keystonejs/auth-password");
require("dotenv").config();

const UsersSchema = require("./schemas/users");
const RentalSchema = require("./schemas/rental");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

const PROJECT_NAME = "Meldev_Keystone";
const DB_URL = process.env.MONGODB_URI;
const adapterConfig = {
  mongoUri: DB_URL,
};

const keystone = new Keystone({
  cookie: {
    secure: IS_PRODUCTION, // Default to true in production
    maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
    sameSite: false,
  },
  adapter: new Adapter(adapterConfig),
  cookieSecret: process.env.COOKIE_SECRET,
  port: process.env.PORT || 3000,
  defaultAccess: {
    list: ({ authentication: { item }, operation, listKey }) => {
      if (
        !IS_PRODUCTION ||
        operation === "read" ||
        (operation === "auth" && listKey === "User")
      ) {
        return true;
      }

      return !!item;
    },
  },
});

keystone.createList("User", UsersSchema);
keystone.createList("Rental", RentalSchema);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: "User",
  config: {
    identityField: "username",
    secretField: "password",
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({
      name: PROJECT_NAME,
      enableDefaultRoute: true,
      ...(IS_PRODUCTION ? { authStrategy } : {}),
    }),
  ],
  configureExpress: (app) => {
    app.set("trust proxy", 1);
  },
};
