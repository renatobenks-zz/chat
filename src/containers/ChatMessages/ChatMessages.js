// @flow

import * as React from 'react';

import type { Conversation, Messages, User } from '../../data';

type State = {
  messages: ?Messages,
  user: ?User,
};

type Props = {
  conversation: Conversation,
  children: React.ComponentType<{ messages: ?Messages, user: ?User }>,
};

class ChatMessages extends React.Component<Props, State> {
  state = {
    messages: null,
    user: null,
  };

  componentDidMount() {
    this.fetchChatMessages();
  }

  fetchChatMessages = () => {
    const { conversation } = this.props;
    this.setState({
      messages: conversation.messages,
      user: conversation.user,
    });
  };

  render() {
    const { messages, user } = this.state;
    const { children: Children } = this.props;

    return <Children messages={messages} user={user} />;
  }
}

export default ChatMessages;
