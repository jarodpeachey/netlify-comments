import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import { library } from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components';
import {
  faMobileAlt,
  faCode,
  faCodeBranch,
  faRocket,
  faBars,
  faEnvelope,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
import {
  fab,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faPhp,
  faGithub,
  faWordpress,
} from '@fortawesome/free-brands-svg-icons';
import SEO from '../components/seo';
// import { Form } from 'triangle-comments';

library.add(
  faMobileAlt,
  faCode,
  faCodeBranch,
  faRocket,
  faBars,
  faEnvelope,
  fab,
  faCss3,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faPhp,
  faDatabase,
  faGithub,
  faWordpress
);

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title='Home' />
      <h1>Test</h1>
      {/* <CommentSection comments={data.allNetlifySubmissions.edges} /> */}
      {/* <Form /> */}
    </>
  );
};

export const IndexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// allNetlifySubmissions(filter: { data: { path: { eq: $pathname } } }) {
//   edges {
//     node {
//       number
//       data {
//         comment
//         email
//         name
//         path
//         parentCommentNumber
//       }
//       created_at(formatString: "M/D/YYYY")
//     }
//   }
// }

const ButtonContainer = styled.div`
  max-width: 400px;
  margin: 0 auto !important;
`;

export default IndexPage;
