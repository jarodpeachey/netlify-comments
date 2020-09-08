// const React = require('react');
// const { NetlifyComments } = require('netlify-comments');

// exports.wrapRootElement = ({ element }, options) => {
//   console.log(element, options);
//   if (element) {
//     return (
//       <CommentsProvider comments={window.netlifyComments}>
//         {element}
//       </CommentsProvider>
//     );
//   }

//   // return element;
// };

// exports.onClientEntry = (_, options) => {
//   console.log('OPTIONS: ', options);
//   window.netlifyComments = new NetlifyComments({
//     apiKey: options.apiKey,
//     siteId: options.siteId,
//   });
// };

const React = require('react');
const { CommentsProvider } = require('gatsby-plugin-netlify-comments');

exports.wrapRootElement = ({ element }, options) => {
  return <CommentsProvider options={options}>{element}</CommentsProvider>;
  // return element;
};
