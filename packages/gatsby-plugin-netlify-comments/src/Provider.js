import { useStaticQuery } from 'gatsby';
import React from 'react';
// import { ApolloProvider } from '@apollo/react-hooks';
// import { client } from './apollo/client';

export const CommentsContext = React.createContext({});

/**
 * Manages the shopping cart, which is persisted in local storage.
 * The cart and related methods are shared through context.
 */

export class CommentsConstructor {
  apiKey = '';

  siteId = '';

  constructor(props) {
    console.log(props);

    this.apiKey = props.apiKey;
    this.siteId = props.siteId;
  }
}

export const CommentsProvider = ({ options, children }) => {
  const { apiKey, siteId } = options;

  if (typeof window !== 'undefined') {
    window.netlifyComments = new CommentsConstructor({ apiKey, siteId });
  }

  const ctx = {
    apiKey,
    siteId,
  };

  return (
    // <ApolloProvider client={client}>
      <CommentsContext.Provider value={{ ...ctx }}>
        {children}
      </CommentsContext.Provider>
    // </ApolloProvider>
  );
};
