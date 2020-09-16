import React from 'react';
import { InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import { Layout } from '../Layout/Layout';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout></Layout>
    </ApolloProvider>
  );
}

export default App;
