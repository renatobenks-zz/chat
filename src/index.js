import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import AppRouter from './AppRouter';

import routes from './router/routes';
import theme from './theme';

render(
  <App theme={theme}>
    <AppRouter routes={routes} />
  </App>,
  document.getElementById('root'),
);

registerServiceWorker();
