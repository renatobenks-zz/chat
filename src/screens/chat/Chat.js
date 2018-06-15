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
import Icon from '../../components/Icon/Icon';

import withData from '../../hocs/withData';

import type { WithDataProps } from '../../hocs/withData';
import { Chat as ChatType } from '../../data';

const CustomSidebar = styled(Sidebar)`
  background: ${props => props.theme.palette.secondary};
  padding: 2rem;
  z-index: 2;
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
  display: flex;
  flex-grow: 11;
  flex-direction: column;
  justify-content: center;
`;

const NoMessages = styled.h1`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 50%;
  color: ${props => props.theme.palette.secondary};
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  align-self: center;

  > strong {
    font-size: 30px;
  }
`;

const SendMessageActions = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 90px;
  display: flex;
  justify-self: flex-end;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${props => props.theme.palette.secondary};
  padding: ${props => props.theme.padding};
  z-index: 1;
`;

const SendMessage = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SendMessageInput = styled.input`
  flex: 1;
  border: 1px solid ${props => props.theme.palette.gray};
  border-radius: 2rem;
  padding: ${props => props.theme.padding};
  font-size: 16px;
  margin: 0 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const SendMessageButton = styled.button`
  padding: ${props => props.theme.padding};
  background: transparent;
  border: 1px solid ${props => props.theme.palette.gray};
  color: ${props => props.theme.palette.gray};
  border-radius: 50%;
  cursor: pointer;
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
    const [conversation] = Object.keys(idx(chat, _ => _.conversations) || {});

    this.state = {
      chat,
      conversation: parseInt(conversation, 10),
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
    const conversation = idx(this.state.chat, _ => _.conversations[this.state.conversation]);

    return (
      <ChatMessages conversation={conversation}>
        {({ messages, user }) => {
          if (!messages || !messages.edges || messages.edges.length < 1) {
            return (
              <NoMessages>
                <strong>There's no messages yet!</strong>
                Begins a conversation right now.
              </NoMessages>
            );
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

  renderSendMessage = () => {
    return (
      <SendMessageActions>
        <SendMessage>
          <SendMessageInput placeholder="Type your message here" />
          <SendMessageButton>
            <Icon size={20}>
              <Icon.SendMessage color="black" />
            </Icon>
          </SendMessageButton>
        </SendMessage>
      </SendMessageActions>
    );
  };

  render() {
    const { chat } = this.state;

    return (
      <Content title={this.props.title} style={styles.content}>
        {chat && <CustomSidebar>{this.renderConversations()}</CustomSidebar>}
        <Conversation>
          {this.renderChatMessages()}
          {this.renderSendMessage()}
        </Conversation>
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
