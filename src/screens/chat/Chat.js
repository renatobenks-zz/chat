// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import format from 'date-fns/format';
import styled, { css } from 'styled-components';
import idx from 'idx';

import type { RouterHistory } from 'react-router-dom';

import { getChannel } from '../../security/channel';
import routeTo from '../../router/routeTo';
import { ROUTES } from '../../router/routes';
import { EVENT_HANDLERS } from '../../constants';
import theme from '../../theme';

import Content from '../../components/Content/Content';
import Sidebar from '../../components/Sidebar/Sidebar';

import ChatMessages from '../../containers/ChatMessages/ChatMessages';

import Messages from '../../components/Messages/Messages';
import Message from '../../components/Message/Message';

import Icon from '../../components/Icon/Icon';
import Badge from '../../components/Badge/Badge';
import Avatar from '../../components/Avatar/Avatar';

import withData from '../../hocs/withData';

import type { WithDataProps } from '../../hocs/withData';
import type { Chat as ChatType } from '../../data';

const SidebarWrapper = styled.div`
  width: 10%;
  max-height: 100%;
  overflow-y: auto;
  background: linear-gradient(${props => props.theme.palette.primary}, ${props => props.theme.palette.secondary});
  position: fixed;
  left: 0;
  top: ${props => props.theme.header.height};
  bottom: ${props => props.theme.header.height};
`;

const CustomSidebar = Sidebar.extend`
  min-height: 100%;
  margin: 0;
`;

const User = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding: 2rem;

  ${props =>
    props.selected &&
    css`
      background: ${props => props.theme.palette.gray};
    `};
`;

const UserImage = styled.div`
  width: 100%;
`;

const UserName = styled.span`
  text-align: center;
  color: white;
  font-size: 14px;
  margin-top: 0.5rem;
  font-weight: 400;
`;

const Conversation = styled.div`
  display: flex;
  width: 90%;
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

const CustomMessages = Messages.extend`
  padding: 1rem 3rem 90px;
`;

const SendMessageActions = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${props => props.theme.header.height};
  display: flex;
  justify-self: flex-end;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 2px solid ${props => props.theme.palette.secondary};
  background: ${props => props.theme.palette.white};
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
  padding: 10px ${props => props.theme.padding};
  font-size: 14px;
  margin: 0 1rem;
  font-family: 'Montserrat', sans-serif;
`;

const SendMessageButton = styled.button`
  padding: 10px 1rem;
  background: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

type State = {
  conversation: ?string,
  message: ?string,
};

type Props = {
  ...WithDataProps,
  history: RouterHistory,
  title: string,
};

class Chat extends React.Component<Props, State> {
  state = {
    conversation: null,
    message: null,
  };

  componentWillMount() {
    const chat = this.getChat();

    if (!chat) {
      return this.props.history.push(routeTo(ROUTES.ONBOARD));
    }

    const [highlightedConversationId] = Object.keys(idx(chat, _ => _.conversations) || {});
    this.setState(
      {
        conversation: highlightedConversationId || null,
      },
      () => this.readUnreachedMessages(highlightedConversationId),
    );
  }

  getChat = (): ?ChatType => {
    const { chat } = this.props;
    const channel = getChannel();

    // $FlowFixMe
    const currentChat = channel && chat && chat[channel];

    if (!currentChat) return null;

    // $FlowFixMe
    return currentChat;
  };

  addMessage = () => {
    const { message, conversation } = this.state;

    // $FlowFixMe
    const { id: chatId } = this.getChat() || {};

    if (!message || !chatId || !conversation) return;

    // $FlowFixMe
    this.props.addMessage(chatId, conversation, message);

    this.setState({ message: null }, () => {
      window.scrollTo(0, document.body && document.body.offsetHeight);
    });
  };

  handleKeyToAddMessage = (e: SyntheticEvent<HTMLButtonElement>) => {
    // $FlowFixMe
    if (e.which === EVENT_HANDLERS.KEYBOARD_CODES.ENTER) {
      this.addMessage();
    }
  };

  onChangeMessage = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({
      message: idx(event, _ => _.currentTarget.value),
    });
  };

  readUnreachedMessages = (conversationId: string) => {
    const chat = this.getChat() || {};
    // $FlowFixMe
    this.props.readUnreachedMessages(chat.id, conversationId);
  };

  openConversation = (id: string) => {
    this.setState({ conversation: id }, () => this.readUnreachedMessages(id));
  };

  renderConversations = () => {
    return Object.values(idx(this.getChat(), _ => _.conversations) || {}).map(conversation => {
      if (!conversation) return null;

      // $FlowFixMe
      const { id, unreachedMessagesCount, user } = conversation;

      return (
        <User key={id} selected={this.state.conversation === id} onClick={() => this.openConversation(id)}>
          <UserImage>
            {unreachedMessagesCount > 0 && (
              <Badge left={16 * 3}>
                <Badge.Circle color={theme.palette.yellow} border={theme.palette.white} />
              </Badge>
            )}
            <Avatar avatar={user.avatarUrl} />
          </UserImage>
          <UserName>{user.name}</UserName>
        </User>
      );
    });
  };

  renderChatMessages = (): React.Element<typeof ChatMessages> => {
    const { conversation: conversationId } = this.state;
    const conversation = conversationId ? idx(this.getChat(), _ => _.conversations[conversationId]) : null;

    return (
      <ChatMessages conversation={conversation}>
        {({ messages, user }) => {
          const edges = (messages || {}).edges || [];

          if (edges.length < 1) {
            return (
              <NoMessages>
                <strong>There's no messages yet!</strong>
                Begins a conversation right now.
              </NoMessages>
            );
          }

          return (
            <CustomMessages>
              {edges.map(({ node }, i) => {
                const { id: authorId, avatarUrl } = node.author || {};
                const latestMessageFromSameAuthorId = idx(edges[i - 1], _ => _.node.author.id);
                const isTheLatestMessageFromSameAuthor = latestMessageFromSameAuthorId === authorId;

                return (
                  <Message
                    key={node.id}
                    isFromMe={authorId !== (user || {}).id}
                    avatar={!isTheLatestMessageFromSameAuthor && avatarUrl}
                    label={format(new Date(node.createdAt), 'HH:mm')}
                  >
                    {node.text}
                  </Message>
                );
              })}
            </CustomMessages>
          );
        }}
      </ChatMessages>
    );
  };

  renderSendMessage = () => {
    return (
      <SendMessageActions>
        <SendMessage>
          <SendMessageInput
            placeholder="Type your message here"
            value={this.state.message || ''}
            onKeyPress={this.handleKeyToAddMessage}
            onChange={this.onChangeMessage}
          />
          <SendMessageButton onClick={this.addMessage}>
            <Icon size={20}>
              <Icon.SendMessage color={theme.palette.gray} />
            </Icon>
          </SendMessageButton>
        </SendMessage>
      </SendMessageActions>
    );
  };

  render() {
    return (
      <Content title={this.props.title} style={styles.content}>
        <SidebarWrapper>
          <CustomSidebar>{this.renderConversations()}</CustomSidebar>
        </SidebarWrapper>
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
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    marginTop: theme.header.height,
  },
};

// $FlowFixMe
const ChatContainer = withData(Chat);

export default hot(module)(ChatContainer);
