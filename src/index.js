import 'babel-polyfill';
import * as React from 'react';
import { render } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import App from './App';
import AppRouter from './AppRouter';

render(
  <App>
    <AppRouter />
  </App>,
  document.getElementById('root'),
);

registerServiceWorker();
