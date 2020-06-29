const React = require('react');
const { CommentsProvider, CommentsConstructor } = require('netlify-comments');

exports.wrapRootElement = ({ element }, options) => {
  console.log(element, options);
  if (element) {
    return <CommentsProvider options={options}>{element}</CommentsProvider>;
  }

  // return element;
};
