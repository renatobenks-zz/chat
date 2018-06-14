// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import type { ContextRouter } from 'react-router-dom';

import routeTo from '../../router/routeTo';
import { ROUTES } from '../../router/routes';

import { updateChannel } from '../../security/channel';

import Content from '../../components/Content/Content';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  color: ${props => props.theme.palette.white};
`;

const Button = styled.button`
  padding: 1rem;
  margin: 1rem;
  text-transform: uppercase;
  background: transparent;
  color: ${props => props.theme.palette.white};
  border: 1px solid ${props => props.theme.palette.white};
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.15s ease-in-out;

  &:hover {
    color: ${props => props.theme.palette.primary};
    background: white;
  }
`;

type Props = {
  ...ContextRouter,
  title: string,
};

class Onboard extends React.Component<Props> {
  goToChat = () => {
    updateChannel('Creditas');
    this.props.history.push(routeTo(ROUTES.CHAT));
  };

  render() {
    return (
      <Content title={this.props.title}>
        <Wrapper>
          <Title>Welcome to creditas team chat!</Title>
          <Button onClick={this.goToChat}>Join</Button>
        </Wrapper>
      </Content>
    );
  }
}

export default hot(module)(Onboard);
