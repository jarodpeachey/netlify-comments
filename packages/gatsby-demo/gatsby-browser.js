/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios');

axios('https://api.staticbox.io/api/sites/jarods-site/comments', {
  headers: {
    'Content-Type': 'application/json',
    key: 'fnEDsS38aiACFAOrb15ToAIT0Z5FbHXOAeASHVRc1lesXmcpf7I',
  },
}).then((res) => {
  console.log(res);
  // res.data.forEach((submission) => {
  //   nodeHelper(submission, 'Comments');
  // });
});
