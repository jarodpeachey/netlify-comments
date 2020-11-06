/* eslint-disable import/prefer-default-export */
/* eslint-disable react/jsx-fragments */
import React, { useState } from 'react';
import styled from 'styled-components';
import { Reply } from './Reply';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export const Comment = ({ comment, children, replies = [], number }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [showReplies, setShowReplies] = useState(false);

  const [colors, setColors] = useState({
    primary: '#fbbe76',
    secondary: '#aacd67',
  });

  const [labelStyles, setLabelStyles] = useState({
    fontSize: 16,
    customCSS: 'margin: 0;',
  });

  const [inputStyles, setInputStyles] = useState({
    fontSize: 16,
    customCSS: 'margin: 0;',
    paddingX: 16,
    paddingY: 16,
  });

  const [buttonStyles, setButtonStyles] = useState({
    customCSS: 'margin: 0;',
  });

  const [state, setState] = useState({
    path: typeof window !== 'undefined' && window.location.pathname,
    name: '',
    email: 'test@mail.com',
    comment: '',
    parentCommentNumber: number
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

  const handleReplyOpen = (e) => {
    setFormOpen(!formOpen);
  };

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
    <>
      <Wrapper>
        <CommentTitle>{comment.name}</CommentTitle>
        {/* <CommentDate>{formatDate(comment.date)}</CommentDate> */}
        <CommentBody>{comment.comment}</CommentBody>
        <CommentFooter>
          <FooterLink
            color={colors.primary}
            onClick={() => setShowReplies(!showReplies)}
          >
            {showReplies && replies
              ? 'Collapse'
              : `(+${replies.length}) Expand`}
          </FooterLink>
          <FooterLink color={colors.primary} onClick={handleReplyOpen}>
            {formOpen ? 'Cancel' : 'Reply'}
          </FooterLink>
        </CommentFooter>
        {formOpen && (
          <form
            name={formName}
            method='post'
            id='form'
            data-netlify='true'
            onSubmit={handleSubmit}
            style={{ background: '#f7f7f7', borderRadius: 6, padding: 12, marginTop: 12 }}
          >
            <input type='hidden' name='form-name' value={formName} />
            <Row>
              <ColumnSix className='col col-6'>
                <HiddenLabel htmlFor='path'>Path</HiddenLabel>
                <HiddenInput
                  name='path'
                  id='path'
                  type='text'
                  value={state.path}
                />
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
                  customStyles={inputStyles}
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
                  customStyles={inputStyles}
                  value={state.email}
                />
              </ColumnSix>
              <ColumnTwelve className='col col-12'>
                <Label htmlFor='comment'>Comment</Label>
                <TextArea
                  onChange={handleChange}
                  name='comment'
                  id='comment'
                  customStyles={inputStyles}
                  value={state.comment}
                ></TextArea>
              </ColumnTwelve>
              <ColumnTwelve className='col col-12'>
                <Button customStyles={buttonStyles} name='button' type='submit'>
                  Reply
                </Button>
              </ColumnTwelve>
            </Row>
          </form>
        )}
      </Wrapper>
      {replies && replies.length > 0 && (
        <>
          {showReplies && (
            <RepliesWrapper color={`${colors.primary}30`}>
              {replies.map((replyComment) => {
                return (
                  <Reply
                    colors={colors}
                    buttonStyles={buttonStyles}
                    inputStyles={inputStyles}
                    comment={replyComment}
                  />
                );
              })}
            </RepliesWrapper>
          )}
        </>
      )}
    </>
  );
};

const Wrapper = styled.div`
  margin: 12px 0;
  padding: 14px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  font-size: 16px;
  width: 100%;
`;

const CommentTitle = styled.h3`
  color: #2c2f3b;
  margin: 0;
`;

const CommentDate = styled.small`
  display: block;
  margin-bottom: 12px;
  color: #4c5267;
`;

const CommentBody = styled.p`
  color: #4c5267;
`;

const CommentFooter = styled.div`
  font-size: 14px;
  color: #4c5267cc;
  display: flex;
  justify-content: space-between;
`;

const FooterLink = styled.span`
  :hover {
    color: #4c8bf5;
    cursor: pointer;
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  padding: 14px;
  border: 1px solid #dfdfdf;
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

const TextArea = styled.textarea`
  padding: 14px;
  border: 1px solid #dfdfdf;
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
  min-height: 150px;
  resize: vertical;
  font-family: inherit !important;
  ${(props) => props.customStyles}
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

const RepliesWrapper = styled.div`
  border-left: 2px solid ${(props) => props.color};
  margin-left: 32px;
  padding-left: 32px;
  width: calc(100% - 64px);
`;

const Row = styled.div`
  @media (min-width: 769px) {
    display: flex !important;
    flex-wrap: wrap !important;
    margin: 0 -12px 0 -12px !important;
    width: calc(100% + 24px) !important;
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
