// @flow

import buildPath from '../../buildPath';
import createLoadable from '../../createLoadable';

import OnboardTemplate from '../../../templates/onboard/OnboardTemplate';

const chatRoutes = {
  path: buildPath('/'),
  component: OnboardTemplate,
  routes: [
    {
      title: 'Join to the team chat',
      name: 'onboard',
      path: buildPath('/'),
      // $FlowFixMe
      component: createLoadable(import('../../../screens/onboard/Onboard')),
      exact: true,
    },
  ],
};

export default chatRoutes;
