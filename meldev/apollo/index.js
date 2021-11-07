import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_KEYSTONE_URI
});

export const { query, useQuery } = client;
