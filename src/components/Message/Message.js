// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled, { css } from 'styled-components';

import Avatar from '../Avatar/Avatar';

const Wrapper = styled.div`
  display: flex;
  width: 85%;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin: 0;

  ${props =>
    props.isFromMe &&
    css`
      flex-direction: row-reverse;
      align-self: flex-end;
      ${!props.hasAvatar &&
        css`
          margin-right: calc(${props.theme.avatar.size} + 1rem);
        `};
    `};

  ${props =>
    !props.isFromMe &&
    css`
      flex-direction: row;
      align-self: flex-start;
      ${!props.hasAvatar &&
        css`
          margin-left: calc(${props.theme.avatar.size} + 1rem);
        `};
    `};
`;

const DialogWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;
  justify-content: center;
  margin: calc(${props => props.theme.avatar.size} / ${props => (props.hasAvatar ? 2 : 4)}) 0 0;

  ${props =>
    props.isFromMe
      ? css`
          align-items: flex-end;
          margin-right: ${props => (!props.hasAvatar ? 0 : '1rem')};
        `
      : css`
          align-items: flex-start;
          margin-left: ${props => (!props.hasAvatar ? 0 : '1rem')};
        `};
`;

const Dialog = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  align-items: center;
  justify-content: flex-start;

  ${props =>
    props.isFromMe &&
    css`
      background: ${props => props.theme.palette.primary};
      border-radius: 1rem 0 1rem 1rem;
    `};

  ${props =>
    !props.isFromMe &&
    css`
      background: ${props => props.theme.palette.gray};
      border-radius: 0 1rem 1rem 1rem;
    `};
`;

const Text = styled.p`
  margin: 0;
  color: ${props => props.theme.palette.white};
  font-size: 14px;
`;

const Time = styled.span`
  color: ${props => props.theme.palette.black};
  font-size: 10px;
  margin: 0.25rem 0 0;
`;

type Props = {
  children: React.Element<any>,
  isFromMe?: ?boolean,
  label?: string,
  avatar?: string,
};

const Message = ({
  children, isFromMe, label, avatar 
}: Props) => {
  const hasAvatar = !!avatar;

  return (
    <Wrapper isFromMe={isFromMe} hasAvatar={hasAvatar}>
      {avatar && <Avatar avatar={avatar} />}
      <DialogWrapper isFromMe={isFromMe} hasAvatar={hasAvatar}>
        <Dialog isFromMe={isFromMe}>
          <Text>{children}</Text>
        </Dialog>
        <Time>{label}</Time>
      </DialogWrapper>
    </Wrapper>
  );
};

export default hot(module)(Message);
