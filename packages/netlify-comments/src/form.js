/* eslint-disable import/prefer-default-export */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import './css/style.css';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export const Form = ({ buttonStyles, inputStyles }) => {
  console.log(typeof window !== 'undefined' && window.triangle);

  const color = 'tomato';

  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      path: state.path,
      parentCommentNumber: state.parentCommentNumber,
    });
  };

  const formName = 'Comments';

  // const [emailError, setEmailError] = useState(false);

  // const onEmailInputChange = (e) => {
  //   setEmail(e.target.value);

  //   const regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  //   if (regex.test(e.target.value)) {
  //     setEmailError(false);
  //   } else {
  //     setEmailError(true);
  //   }
  // };

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
      .then((res) => console.log('Done:  ', res))
      .catch((error) => alert(error));
  };

  return (
    <div className='wrapper'>
          {/* <form name='comments-queue' netlify netlify-honeypot='bot-field' hidden>
              <input type='text' name='name' id='' />
              <input type='email' name='email' id='' />
              <textarea name='comment' id=''></textarea>
            </form> */}
      <br />
      <br />
      <h2>Add A Comment</h2>
      <form
        name={formName}
        method='post'
        id='form'
        // action='/thanks/'
        data-netlify='true'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value={formName} />
        <div className='row'>
          <div className='col col-6'>
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
              color={color}
              onChange={handleChange}
              type='text'
              name='name'
              id='name'
              customStyles={inputStyles}
            />
          </div>
          <div className='col col-6'>
            <Label htmlFor='email'>Email</Label>
            <Input
              color={color}
              onChange={handleChange}
              type='email'
              name='email'
              id='email'
              customStyles={inputStyles}
            />
          </div>
          <div className='col col-12'>
            <Label htmlFor='comment'>Comment</Label>
            <TextArea
              color={color}
              onChange={handleChange}
              name='comment'
              id='comment'
              customStyles={inputStyles}
            ></TextArea>
          </div>
          <div className='col col-12'>
            <Button
              color={color}
              customStyles={buttonStyles}
              name='button'
              type='submit'
            >
              Post your comment
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Label = styled.label`
  margin-bottom: 8px;
  display: block;
  font-weight: 500;
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

const Input = styled.input`
  padding: 14px;
  border: 1px solid #e8e8e8;
  border-radius: 3px;
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
  ${(props) => props.customStyles}
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
  border: 1px solid #e8e8e8;
  border-radius: 3px;
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
  ${(props) => props.customStyles}
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 14px;
  margin-left: auto;
  display: block;
  border-radius: 6px;
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
  ${(props) => props.customStyles}
  box-sizing: border-box;
`;
