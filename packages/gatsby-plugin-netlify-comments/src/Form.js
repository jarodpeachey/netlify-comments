/* eslint-disable import/prefer-default-export */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export const Form = () => {
  const [state, setState] = useState({
    path: typeof window !== 'undefined' && window.location.pathname,
    name: '',
    email: 'test@mail.com',
    comment: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      path: state.path,
      parentCommentNumber: state.parentCommentNumber,
    });
  };

  const formName = 'Comments';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById('form');
    fetch('/ ', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then((res) => {
        setState({
          ...state,
          name: '',
          email: '',
          comment: '',
          path: state.path,
          parentCommentNumber: state.parentCommentNumber,
        });
      })
      .catch((error) => alert(error));
  };

  return (
    <Wrapper>
      <form
        name={formName}
        method='post'
        id='form'
        // action='/thanks/'
        data-netlify='true'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value={formName} />
        <Row>
          <ColumnSix className='col col-6'>
            <HiddenLabel htmlFor='path'>Path</HiddenLabel>
            <HiddenInput name='path' id='path' type='text' value={state.path} />
            <HiddenLabel htmlFor='parentCommentNumber'>
              Parent Comment Number
            </HiddenLabel>
            <HiddenInput
              name='parentCommentNumber'
              id='parentCommentNumber'
              type='text'
              value={0}
            />
            <Label htmlFor='name'>Name</Label>
            <Input
              onChange={handleChange}
              type='text'
              name='name'
              id='name'
              value={state.name}
            />
          </ColumnSix>
          <ColumnSix className='col col-6'>
            <Label htmlFor='email'>Email</Label>
            <Input
              onChange={handleChange}
              type='email'
              name='email'
              id='email'
              value={state.email}
            />
          </ColumnSix>
          <ColumnTwelve className='col col-12'>
            <Label htmlFor='comment'>Comment</Label>
            <TextArea
              onChange={handleChange}
              name='comment'
              id='comment'
              value={state.comment}
            ></TextArea>
          </ColumnTwelve>
          <ColumnTwelve className='col col-12'>
            <Button name='button' type='submit'>
              Post your comment
            </Button>
          </ColumnTwelve>
        </Row>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  * {
    box-sizing: border-box;
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
  display: block;
  box-sizing: border-box;
  color: #444;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 14px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  :hover {
    border: 1px solid #4c8bf5;
  }
  :focus {
    border: 1px solid #4c8bf5;
    outline: 1px #4c8bf5 auto;
  }
  transition: 0.15s;
  box-sizing: border-box;
`;

const HiddenLabel = styled.label`
  height: 0px;
  width: 0px;
  background: transparent;
  color: transparent;
  border: none;
  outline: none;
  cursor: default;
  padding: 0;
  margin: 0;
  max-height: 0px;
  min-height: 0px;
  display: float;
  box-sizing: border-box;
`;

const HiddenInput = styled.input`
  height: 0px;
  width: 0px;
  background: transparent;
  color: transparent;
  border: none;
  outline: none;
  cursor: default;
  padding: 0;
  margin: 0;
  max-height: 0px;
  min-height: 0px;
  display: float;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  padding: 14px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  outline: none;
  :hover {
    border: 1px solid #4c8bf5;
  }
  :focus {
    border: 1px solid #4c8bf5;
    outline: 1px #4c8bf5 auto;
  }
  transition: 0.15s;
  box-sizing: border-box;
  min-height: 125px;
  resize: vertical;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 14px;
  margin-left: auto;
  display: block;
  border-radius: 5px;
  background: #4c8bf5;
  border: 1px solid #4c8bf5;
  cursor: pointer;
  text-transform: uppercase;
  color: white;
  font-size: 14px;
  box-shadow: 2px 2px 8px -4px #447ee0;
  transition: 0.15s;
  :hover {
    background: #447ee0;
    border: 1px solid #447ee0;
    box-shadow: 3px 3px 20px -8px #447ee0;
  }
  box-sizing: border-box;
`;

const Row = styled.div`
  margin: 0 -12px 0 -12px !important;

  @media (min-width: 769px) {
    display: flex !important;
    flex-wrap: wrap !important;
  }
`;

const ColumnSix = styled.div`
  padding: 12px !important;
  margin: 0 !important;
  display: block !important;
  padding: 12px;
  @media (min-width: 769px) {
    flex: none;
    width: 50%;
  }
`;

const ColumnTwelve = styled.div`
  padding: 12px !important;
  margin: 0 !important;
  display: block !important;
  padding: 12px;
  @media (min-width: 769px) {
    flex: none;
    width: 100%;
  }
`;
