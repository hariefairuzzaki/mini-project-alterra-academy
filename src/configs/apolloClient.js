import { ApolloClient, InMemoryCache } from "@apollo/client";
import CONST from "../utils/constants";

const client = new ApolloClient({
  uri: CONST.GRAPHHQL_URL,
  headers: {
    "x-hasura-admin-secret": CONST.HASURA_ADMIN_SECRET,
  },
  cache: new InMemoryCache(),
});

export default client;
