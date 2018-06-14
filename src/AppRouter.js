// @flow

import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';

import drawRoutes from './router/drawRoutes';

import Loading from './components/Loading/Loading';

import type { RouteType } from './TypeDefinition';

const LoadingMessage = styled.h1`
  color: white;
`;

type State = {
  isLoading: boolean,
};

type Props = {
  routes: Array<RouteType>,
};

export default class AppRouter extends React.Component<Props, State> {
  timeout: TimeoutID;

  state = {
    isLoading: true,
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1500);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <Loading full>
          <LoadingMessage>LOADING...</LoadingMessage>
        </Loading>
      );
    }

    return (
      <BrowserRouter>
        <Switch>{drawRoutes(this.props.routes)}</Switch>
      </BrowserRouter>
    );
  }
}
