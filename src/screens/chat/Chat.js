// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import format from 'date-fns/format';
import styled from 'styled-components';
import idx from 'idx';

import type { ContextRouter } from 'react-router-dom';

import { getChannel } from '../../security/channel';

import Content from '../../components/Content/Content';
import Sidebar from '../../components/Sidebar/Sidebar';

import ChatMessages from '../../containers/ChatMessages/ChatMessages';

import Messages from '../../components/Messages/Messages';
import Message from '../../components/Message/Message';

import withData from '../../hocs/withData';

import type { WithDataProps } from '../../hocs/withData';
import { Chat as ChatType } from '../../data';

const CustomSidebar = styled(Sidebar)`
  background: ${props => props.theme.palette.secondary};
  padding: 2rem;
`;

const User = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;

  &:first-of-type {
    margin: 0;
  }
`;

const UserImage = styled.img`
  width: 100%;
  height: auto;
`;

const UserName = styled.span`
  text-align: center;
  color: white;
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: 400;
`;

const Conversation = styled.div`
  flex-grow: 11;
  text-align: center;
`;

type State = {
  chat: ChatType,
  conversation: ?number,
};

type Props = {
  ...ContextRouter,
  ...WithDataProps,
  title: string,
};

class Chat extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const chat = this.props.chat[parseInt(getChannel(), 10)] || null;

    this.state = {
      chat,
      conversation: parseInt(Object.keys(idx(chat, _ => _.conversations) || {})[0], 10),
    };
  }

  renderConversations = () => {
    return Object.values(this.state.chat.conversations).map(conversation => {
      if (!conversation) return null;

      return (
        // $FlowFixMe
        <User key={conversation.id}>
          <UserImage src="https://i.imgur.com/I80W1Q0.png" />
          {/*$FlowFixMe*/}
          <UserName>{conversation.user.name}</UserName>
        </User>
      );
    });
  };

  renderChatMessages = () => {
    const { conversations } = this.state.chat || {};

    if (!conversations) {
      return <h1>No conversation</h1>;
    }

    return (
      <ChatMessages conversation={conversations[this.state.conversation]}>
        {({ messages, user }) => {
          if (!messages) {
            return <h1>No messages</h1>;
          }

          return (
            <Messages>
              {messages.edges.map(({ node }) => (
                <Message
                  key={node.id}
                  isFromMe={node.author.id !== (user || {}).id}
                  label={format(new Date(node.createdAt), 'HH:mm')}
                >
                  {node.text}
                </Message>
              ))}
            </Messages>
          );
        }}
      </ChatMessages>
    );
  };

  render() {
    const { chat } = this.state;

    return (
      <Content title={this.props.title} style={styles.content}>
        {chat && <CustomSidebar>{this.renderConversations()}</CustomSidebar>}
        <Conversation>{this.renderChatMessages()}</Conversation>
      </Content>
    );
  }
}

const styles = {
  content: {
    minHeight: '100%',
    display: 'flex',
    flex: 1,
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
};

export default hot(module)(withData(Chat));
