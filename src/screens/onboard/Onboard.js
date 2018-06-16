// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import idx from 'idx';

import type { RouterHistory } from 'react-router-dom';

import routeTo from '../../router/routeTo';
import { ROUTES } from '../../router/routes';

import { updateChannel } from '../../security/channel';

import Content from '../../components/Content/Content';

import withData from '../../hocs/withData';

import type { WithDataProps } from '../../hocs/withData';

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
  ...WithDataProps,
  history: RouterHistory,
  title: string,
};

class Onboard extends React.Component<Props> {
  goToChat = () => {
    this.saveChannel();
    this.props.history.push(routeTo(ROUTES.CHAT));
  };

  saveChannel = () => {
    const chats = Object.values(this.props.chat);

    // $FlowFixMe
    const chatOwners = chats.map(chat => idx(chat, _ => _.owner.id));

    // $FlowFixMe
    const meChat = chatOwners.indexOf(this.props.me.id);

    // $FlowFixMe
    return meChat !== -1 ? updateChannel((chats[meChat] || {}).id) : null;
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

// $FlowFixMe
const OnboardContainer = withData(Onboard);

export default hot(module)(OnboardContainer);
