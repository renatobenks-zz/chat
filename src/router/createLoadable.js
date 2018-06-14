// @flow

import * as React from 'react';
import Loadable from 'react-loadable';

export default function createLoadable(component: Promise<React.Node>): React.Node {
  return Loadable({
    loader: () => component,
    loading() {
      return null;
    },
  });
}
