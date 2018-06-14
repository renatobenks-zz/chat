// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';

import type { RouterHistory } from 'react-router-dom';

import { ROUTES } from '../routes';
import routeTo from '../routeTo';

import { isOnChat } from '../../security/channel';

type State = {
  isOnChat: boolean,
};

type Props = {
  history: RouterHistory,
};

export default function onChatMiddleware(Component: React.ComponentType<{}>): React.ComponentType<{}> {
  class ChatComponent extends React.Component<Props, State> {
    state = {
      isOnChat: isOnChat(),
    };

    componentWillMount() {
      this.handleToSelectChat();
    }

    componentWillReceiveProps() {
      this.setState({ isOnChat: isOnChat() }, () => this.handleToSelectChat());
    }

    handleToSelectChat = () => {
      if (!this.state.isOnChat) {
        this.props.history.push(routeTo(ROUTES.ONBOARD));
      }
    };

    render() {
      return this.state.isOnChat && <Component {...this.props} />;
    }
  }

  return withRouter(ChatComponent);
}
