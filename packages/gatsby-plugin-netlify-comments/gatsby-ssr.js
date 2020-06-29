const React = require('react');
const { CommentsProvider } = require('netlify-comments');

exports.wrapRootElement = ({ element }, options) => {
  return <CommentsProvider options={options}>{element}</CommentsProvider>;
  // return element;
};
