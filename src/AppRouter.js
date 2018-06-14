// @flow

import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import drawRoutes from './router/drawRoutes';

import type { RouteType } from './TypeDefinition';

type Props = {
  routes: Array<RouteType>,
};

export default class AppRouter extends React.Component<Props> {
  render() {
    return (
      <BrowserRouter>
        <Switch>{drawRoutes(this.props.routes)}</Switch>
      </BrowserRouter>
    );
  }
}
