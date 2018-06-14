// @flow

import buildPath from '../../buildPath';
import createLoadable from '../../createLoadable';

import onChatMiddleware from '../../middlewares/onChatMiddleware';

import ChatTemplate from '../../../templates/chat/ChatTemplate';

const chatRoutes = {
  path: buildPath('chat'),
  component: onChatMiddleware(ChatTemplate),
  routes: [
    {
      title: 'Team chat for Creditas',
      name: 'chat',
      path: buildPath('chat'),
      // $FlowFixMe
      component: createLoadable(import('../../../screens/chat/Chat')),
      exact: true,
    },
  ],
};

export default chatRoutes;
