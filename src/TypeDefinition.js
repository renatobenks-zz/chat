// @flow

import * as React from 'react';

export type RouteType = {
  title?: string,
  name?: string,
  path: string,
  component: React.ComponentType<{}>,
  exact?: boolean,
  routes?: Array<RouteType>,
};

export type RouteParamsType = {
  [string]: string,
};

export type StyleProp = {
  [key: string]: any,
};
