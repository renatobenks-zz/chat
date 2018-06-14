// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';

import type { ContextRouter } from 'react-router-dom';

import Content from '../../components/Content/Content';

type Props = {
  ...ContextRouter,
  title: string,
};

class Chat extends React.Component<Props> {
  render() {
    return (
      <Content title={this.props.title}>
        <h1>Team chat</h1>
      </Content>
    );
  }
}

export default hot(module)(Chat);
