// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 50%;
  flex-flow: column wrap;
  justify-content: center;
  align-items: ${props => (props.isFromMe ? 'flex-end' : 'flex-start')};
  align-self: ${props => (props.isFromMe ? 'flex-end' : 'flex-start')};
  margin: 1rem 0;

  > * {
    margin: 0.2rem 0;
  }
`;

const Dialog = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  align-items: center;
  justify-content: flex-start;

  background: ${props => (props.isFromMe ? props.theme.palette.primary : props.theme.palette.gray)};
  border-radius: 1rem 1rem ${props => (props.isFromMe ? '0' : '1rem')} ${props => (props.isFromMe ? '1rem' : '0')};
`;

const Text = styled.span`
  color: white;
  font-size: 14px;
`;

const Label = styled.span`
  color: black;
  font-size: 10px;
`;

type Props = {
  children: React.Element<any>,
  isFromMe?: ?boolean,
  label?: string,
};

const Message = ({ children, isFromMe, label }: Props) => {
  return (
    <Wrapper isFromMe={isFromMe}>
      <Dialog isFromMe={isFromMe}>
        <Text>{children}</Text>
      </Dialog>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default hot(module)(Message);
