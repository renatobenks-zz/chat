// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import format from 'date-fns/format';
import styled from 'styled-components';
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

import withData from '../../hocs/withData';

import type { WithDataProps } from '../../hocs/withData';
import type { Chat as ChatType } from '../../data';

const SidebarWrapper = styled.div`
  width: 10%;
  max-height: 100%;
  overflow-y: auto;
  background: ${props => props.theme.palette.secondary};
  position: fixed;
  left: 0;
  top: ${props => props.theme.header.height};
  bottom: ${props => props.theme.header.height};
  padding: 2rem;
`;

const CustomSidebar = styled(Sidebar)`
  min-height: 100%;
  display: table;
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

const CustomMessages = styled(Messages)`
  padding-bottom: 90px;
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
  chat: ?ChatType,
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
    chat: null,
    conversation: null,
    message: null,
  };

  componentWillMount() {
    const chat = this.getChat(this.props);
    const highlightedConversation = Object.keys(idx(chat, _ => _.conversations) || {})[0];

    if (!chat) {
      return this.props.history.push(routeTo(ROUTES.ONBOARD));
    }

    this.setState({ chat, conversation: highlightedConversation });
  }

  componentWillReceiveProps(nextProps: Props) {
    const chat = this.getChat(nextProps);

    if (chat !== this.state.chat) {
      this.setState({ chat });
    }
  }

  getChat = (props: Props): ?ChatType => {
    const channel = getChannel();

    // $FlowFixMe
    const chat = channel && props.chat && props.chat[channel];

    if (!chat) return null;

    // $FlowFixMe
    return chat;
  };

  addMessage = () => {
    const { message, chat, conversation } = this.state;

    // $FlowFixMe
    const { id: chatId } = chat || {};
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

  openConversation = (id: string) => {
    this.setState({ conversation: id });
  };

  renderConversations = () => {
    return Object.values(idx(this.state.chat, _ => _.conversations) || {}).map(conversation => {
      if (!conversation) return null;

      return (
        // $FlowFixMe
        <User key={conversation.id} onClick={() => this.openConversation(conversation.id)}>
          <UserImage src="https://i.imgur.com/I80W1Q0.png" />
          {/*$FlowFixMe*/}
          <UserName>{conversation.user.name}</UserName>
        </User>
      );
    });
  };

  renderChatMessages = (): React.Element<typeof ChatMessages> => {
    const { conversation: conversationId } = this.state;
    const conversation = conversationId ? idx(this.state.chat, _ => _.conversations[conversationId]) : null;

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
            <CustomMessages>
              {messages.edges.map(({ node }) => (
                <Message
                  key={node.id}
                  isFromMe={node.author.id !== (user || {}).id}
                  label={format(new Date(node.createdAt), 'HH:mm')}
                >
                  {node.text}
                </Message>
              ))}
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
        {chat && (
          <SidebarWrapper>
            <CustomSidebar>{this.renderConversations()}</CustomSidebar>
          </SidebarWrapper>
        )}
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
