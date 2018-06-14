// @flow

import * as React from 'react';
import { Route } from 'react-router-dom';

import type { RouteType } from '../TypeDefinition';

type RouteElement = React.Element<typeof Route>;

export const drawRoute = (route: RouteType): RouteElement => {
  const { component: Component } = route;

  return (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={props => <Component {...props} routes={route.routes} title={route.title} />}
    />
  );
};

const drawRoutes = (routes: Array<RouteType>): Array<RouteElement> => {
  return routes.map(route => drawRoute(route));
};

export default drawRoutes;
