import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_SANITY_URI,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.NEXT_PUBLIC_SANITY_KEY;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "http://localhost:3000",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const { query, useQuery } = client;
