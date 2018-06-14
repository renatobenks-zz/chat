// @flow

import chatRoutes from './chat';
import onboardRoutes from './onboard';

export const ROUTES = {
  CHAT: 'chat',
  ONBOARD: 'onboard',
};

export type RouteName = $Values<typeof ROUTES>;

export default [chatRoutes, onboardRoutes];
