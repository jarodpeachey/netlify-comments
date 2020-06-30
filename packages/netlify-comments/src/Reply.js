import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { formatDate } from './utils/formatDate';

const Reply = ({ comment, buttonStyles, inputStyles, colors }) => {
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState('');
  const [reply, setReply] = useState('');

  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleReplyOpen = (e) => {
    setFormOpen(!formOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Triangle: ', window.triangle);
  };

  return (
    <Container>
      <Wrapper gray>
        <CommentTitle>{comment.node.data.name}</CommentTitle>
        <CommentDate>{formatDate(comment.node.data.date)}</CommentDate>
        <CommentBody>{comment.node.data.comment}</CommentBody>
        <CommentFooter>
          <span style={{ cursor: 'pointer' }} onClick={handleReplyOpen}>
            {formOpen ? 'Reply' : 'Reply'}
          </span>
        </CommentFooter>
        {formOpen && (
          <form
            style={{ margin: 0 }}
            method='post'
            id='form'
            onSubmit={handleSubmit}
          >
            <div className='custom-row'>
              <div className='custom-col custom-col-12'>
                <Input
                  customCSS={inputStyles.customCSS}
                  fontSize={inputStyles.fontSize}
                  color={colors.primary}
                  padding={{
                    vertical: inputStyles.paddingY,
                    horizontal: inputStyles.paddingX,
                  }}
                  onChange={handleNameChange}
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  value={name}
                />
              </div>
              <div className='custom-col custom-col-12'>
                <TextArea
                  customCSS={inputStyles.customCSS}
                  fontSize={inputStyles.fontSize}
                  color={colors.primary}
                  padding={{
                    vertical: inputStyles.paddingY,
                    horizontal: inputStyles.paddingX,
                  }}
                  onChange={handleReplyChange}
                  name='comment'
                  id='comment'
                  placeholder='Comment'
                  value={reply}
                ></TextArea>
              </div>
              <div className='custom-col custom-col-12'>
                <Button
                  customCSS={buttonStyles.customCSS}
                  background={colors.primary}
                  name='button'
                >
                  Reply
                </Button>
              </div>
            </div>
          </form>
        )}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  // padding-left: 58px;
`;
const Wrapper = styled.div`
  padding: 14px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
  font-size: 16px;
  background: white;
  outline: none;
  width: 100%;
  margin: 12px 0;
  background: ${(props) => (props.gray ? 'white' : 'white')};
`;

const CommentTitle = styled.h3`
  margin: 0;
`;

const CommentDate = styled.small`
  display: block;
  margin-bottom: 12px;
`;

const CommentBody = styled.p``;

const CommentFooter = styled.div`
  font-size: 14px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  display: block;
  font-size: ${(props) => props.fontSize}px !important;
  ${(props) =>
    props.customCSS &&
    css`
      ${props.customCSS}
    `}
`;

const Input = styled.input`
  padding-top: ${(props) => props.padding.vertical}px;
  padding-right: ${(props) => props.padding.horizontal}px;
  padding-left: ${(props) => props.padding.horizontal}px;
  padding-bottom: ${(props) => props.padding.vertical}px;
  margin: 0;
  width: 100%;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  :focus {
    outline: 1px ${(props) => props.color} auto;
  }
  font-size: ${(props) => props.fontSize}px !important;
  ${(props) =>
    props.customCSS &&
    css`
      ${props.customCSS}
    `}
`;

const TextArea = styled.textarea`
  padding-top: ${(props) => props.padding.vertical}px;
  padding-right: ${(props) => props.padding.horizontal}px;
  padding-left: ${(props) => props.padding.horizontal}px;
  padding-bottom: ${(props) => props.padding.vertical}px;
  width: 100%;
  font-size: ${(props) => props.fontSize}px !important;
  margin: 0;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  min-height: 150px;
  resize: vertical;
  :focus {
    outline: 1px ${(props) => props.color} auto;
  }
  ${(props) =>
    props.customCSS &&
    css`
      ${props.customCSS}
    `}
`;

const Button = styled.button`
  padding: 12px;
  background: ${(props) => props.background};
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: auto;
  ${(props) =>
    props.customCSS &&
    css`
      ${props.customCSS}
    `}
`;

export default Reply;
