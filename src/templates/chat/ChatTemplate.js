// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import type { RouterHistory } from 'react-router-dom';

import drawRoutes from '../../router/drawRoutes';

import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';

import type { RouteType } from '../../TypeDefinition';

const Wrapper = styled.div`
  max-width: 100%;
  flex: 1;
`;

type Props = {
  history: RouterHistory,
  routes: Array<RouteType>,
};

class ChatTemplate extends React.Component<Props> {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo />
        </Header>
        {drawRoutes(this.props.routes)}
      </Wrapper>
    );
  }
}

export default hot(module)(ChatTemplate);
