// @flow

import * as React from 'react';

import Loading from '../../components/Loading/Loading';

import theme from '../../theme';

import type { Conversation, Messages, User } from '../../data';

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

  fetchChatMessages = () => {
    this.setState({ isLoading: true });

    this.timeout = setTimeout(() => {
      const { messages, user } = this.props.conversation || {};

      this.setState({
        isLoading: false,
        messages: messages || null,
        user: user || null,
      });
    }, 1500);
  };

  render() {
    const { messages, user, isLoading } = this.state;
    const { children: Children } = this.props;

    if (isLoading) {
      return <Loading color={theme.palette.secondary} noBackground />;
    }

    return <Children messages={messages} user={user} />;
  }
}

export default ChatMessages;
