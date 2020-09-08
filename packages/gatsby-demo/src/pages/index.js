import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import { Form, Comments } from 'gatsby-plugin-netlify-comments';
import SEO from '../components/seo';
import '../components/style.css';

const inputStyles = `
  background: #f2f4f9;
  border-radius: 6px;
  border: 1px solid #f2f4f9;
  margin: 0;
  box-shadow: none;
  :focus {
    outline: 2px transparent;
    border: 1px solid tomato;
  }
  :hover {
    border: 1px solid tomato;
  }
`;

const buttonStyles = `
  background: tomato;
  border-radius: 6px;
  border: 2px solid tomato;
  margin: 0;
  color: white;
  box-shadow: 2px 2px 8px -4px #de503720;
  padding: 14px 14px;
  margin-left: auto;
  cursor: pointer;
  :hover {
    background: #de5037;
    box-shadow: 2px 2px 20px -8px #de503720;
    border: 2px solid  #de5037;
  }
`;

const commentStyles = `
  padding: 16px;
  border-radius: 6px;
`;

const IndexPage = ({ data }) => {
  return (
    <>
      <SEO title='Home' />
      <Hero>
        <Container>
          <Title>Add Comments To Your Static Site</Title>
          <Subtitle>
            Using Netlify forms and Gatsby, you can add comments to your static
            website!
          </Subtitle>
        </Container>
      </Hero>
      <Container>
        <Form />
        <Comments />
      </Container>
      {/* <CommentSection comments={data.allComments.edges} /> */}
      {/* <Form /> */}
    </>
  );
};

const Hero = styled.div`
  padding: 120px 0;
  background: tomato;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0px 24px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;
  margin-top: 0;
  margin-bottom: 24px;
  text-align: center;
`;

const Subtitle = styled.h3`
  color: #ffffff90;
  margin-top: 0;
  font-size: 30px;
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
`;

export const IndexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

// allComments(filter: { data: { path: { eq: $pathname } } }) {
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
