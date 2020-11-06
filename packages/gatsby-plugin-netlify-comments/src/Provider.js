import React from 'react';

export const CommentsContext = React.createContext({});

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
    <CommentsContext.Provider value={{ ...ctx }}>
      {children}
    </CommentsContext.Provider>
  );
};
