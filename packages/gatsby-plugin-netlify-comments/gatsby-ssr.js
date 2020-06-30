// const React = require('react');
// const { CommentsProvider, NetlifyComments } = require('netlify-comments');

// // exports.wrapRootElement = ({ element }, options) => {
// //   console.log(element, options);
// //   if (element) {
// //     return (
// //       <CommentsProvider comments={window.netlifyComments}>
// //         {element}
// //       </CommentsProvider>
// //     );
// //   }

// //   // return element;
// // };

// exports.onClientEntry = (options) => {
//   window.netlifyComments = new NetlifyComments({
//     apiKey: options.apiKey,
//     siteID: options.siteID,
//   });
// };
