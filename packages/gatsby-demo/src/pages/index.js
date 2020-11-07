import React from 'react';
// import { Link } from 'gatsby';
// import Image from '../components/image';
// import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery } from 'gatsby';
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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query netlifyComments {
      allComments {
        edges {
          node {
            data {
              comment
              email
              name
              parentCommentNumber
              path
            }
            number
          }
        }
      }

      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <SEO title='Home' />
      <Hero>
        <Container>
          <Title>Gatsby + Netlify Comments Plugin Demo</Title>
          <Subtitle>
            This is a demo of a soon-to-be-released Gatsby plugin to allow you
            to add comments to your static website! 🔥
          </Subtitle>
        </Container>
      </Hero>
      <Container>
        <Card>
          <p>
            Go ahead, add a comment and play around. Your data won't be used,
            and you can use dummy data as well 🙂
          </p>
          <h2>Add a comment</h2>
          <Form />
          <h2>All comments</h2>
          <Comments data={data} />
        </Card>
      </Container>
    </>
  );
};

const Hero = styled.div`
  padding: 100px 0;
  background: rgb(68, 126, 224);
  padding-bottom: 380px;
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
  font-weight: 600;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 32px;
`;

const Subtitle = styled.h3`
  color: #ffffff;
  margin-top: 0;
  font-size: 22px;
  font-weight: 400;
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
`;

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 1px 1px 1400px 0px #00000030;
  background: white;
  max-width: 960px;
  margin: 0 auto;
  padding: 48px;
  margin-top: -248px;

  h2 {
    margin-top: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #222;
  }

  p {
    color: #444;
  }

  p:first-child {
    font-size: 1.125rem;
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

export default IndexPage;
