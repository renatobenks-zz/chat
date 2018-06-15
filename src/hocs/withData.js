// @flow

import * as React from 'react';
import uuid from 'uuid/v1';
import idx from 'idx';

import type { ContextRouter } from 'react-router-dom';

import data from '../data';

import type { User, Chat } from '../data';

export type WithDataProps = {
  ...Props,
  ...State,
  addMessage: (chatId: string, conversationId: string, text: string) => void,
};

type State = {
  me: User,
  chat: {
    [id: string]: Chat,
  },
};

type Props = {
  ...ContextRouter,
};

export default function withData(Component: React.ComponentType<WithDataProps>): React.ComponentType<Props> {
  class WithDataComponent extends React.Component<Props, State> {
    state = {
      me: data.me,
      chat: data.chat,
    };

    addMessage = (chatId: string, conversationId: string, text: string) => {
      const chat = this.state.chat[chatId] || {};
      const conversation = chat.conversations[conversationId] || {};
      const messages = conversation.messages || {};

      if (!messages) return;

      this.setState({
        chat: {
          ...this.state.chat,
          [chatId]: {
            ...chat,
            conversations: {
              ...(chat.conversations || {}),
              [conversationId]: {
                ...conversation,
                messages: {
                  ...messages,
                  edges: [
                    ...(messages.edges || []),
                    {
                      cursor: (idx(messages, _ => _.edges.length) || 0).toString(),
                      node: {
                        id: uuid(),
                        text,
                        createdAt: new Date().toISOString(),
                        author: this.state.me,
                      },
                    },
                  ],
                },
              },
            },
          },
        },
      });
    };

    render() {
      return <Component {...this.props} {...this.state} addMessage={this.addMessage} />;
    }
  }

  return WithDataComponent;
}
