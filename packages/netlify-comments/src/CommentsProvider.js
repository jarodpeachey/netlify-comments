const React = require('react');

export const CommentsContext = React.createContext({});

/**
 * Manages the shopping cart, which is persisted in local storage.
 * The cart and related methods are shared through context.
 */

export class CommentsConstructor {
  color = 'tomato';

  apiKey = '';

  siteID = '';

  constructor(props) {
    console.log(props);

    this.apiKey = props.apiKey;
    this.color = props.color;
    this.siteID = props.siteID;
  }
}

export const CommentsProvider = ({ options, children }) => {
  console.log(options, children);

  const { apiKey, siteID, color } = options;

  window.Comments = new CommentsConstructor(options);

  const ctx = {
    apiKey,
    siteID,
    color,
  };

  return (
    <CommentsContext.Provider value={{ ...ctx }}>
      {children}
    </CommentsContext.Provider>
  );
};
