// @flow

import allRoutes from './routes';

import type { RouteName } from './routes';

import buildPath from './buildPath';

import type { RouteType, RouteParamsType } from '../TypeDefinition';

const findPathByRouteName = (name: string, routes: Array<RouteType>): ?string =>
  routes
    .map(subroute => {
      if (subroute.name === name) {
        return subroute.path;
      }

      if (subroute.routes) {
        return findPathByRouteName(name, subroute.routes);
      }

      return null;
    })
    .filter(subroute => subroute && subroute.length > 0)
    .shift();

const replaceParams = (path: string, params: RouteParamsType): string => {
  return Object.keys(params).reduce((accumulator, currentValue) => {
    return accumulator.replace(`:${currentValue}`, params[currentValue]);
  }, path);
};

const routeTo = (name: RouteName, params: RouteParamsType = {}): string => {
  const path = findPathByRouteName(name, allRoutes);
  if (!path) {
    return buildPath();
  }
  return replaceParams(path, params);
};

export default routeTo;
