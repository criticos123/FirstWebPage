import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3001/admin/api"
});

export const { query, useQuery } = client;
