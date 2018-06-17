// @flow

import * as React from 'react';
import styled from 'styled-components';
import idx from 'idx';

import type { Conversation, Messages, User } from '../../data';

const LoadingMessage = styled.h1`
  color: ${props => props.theme.palette.secondary};
  font-size: 22px;
  text-transform: uppercase;
  text-align: center;
`;

type State = {
  messages: ?Messages,
  user: ?User,
  isLoading: boolean,
};

type Props = {
  conversation: ?Conversation,
  children: React.ComponentType<{ messages: ?Messages, user: ?User }>,
};

class ChatMessages extends React.Component<Props, State> {
  timeout: TimeoutID;

  state = {
    messages: null,
    user: null,
    isLoading: false,
  };

  componentDidMount() {
    this.fetchChatMessages();
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.conversation !== this.props.conversation) {
      if (idx(nextProps.conversation, _ => _.id) !== idx(this.props.conversation, _ => _.id)) {
        this.fetchChatMessages();
        return;
      }

      this.receiveMessages(nextProps);
    }
  }

  fetchChatMessages = () => {
    this.setState({ isLoading: true });

    this.timeout = setTimeout(() => {
      this.receiveMessages();
      this.setState({ isLoading: false });
    }, 1500);
  };

  receiveMessages = (props?: Props) => {
    const { messages, user } = (props || this.props).conversation || {};

    this.setState({
      messages: messages || null,
      user: user || null,
    });
  };

  render() {
    const { messages, user, isLoading } = this.state;
    const { children: Children } = this.props;

    if (isLoading) {
      return <LoadingMessage>Loading...</LoadingMessage>;
    }

    return <Children messages={messages} user={user} />;
  }
}

export default ChatMessages;
