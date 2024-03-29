// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { injectGlobal, ThemeProvider } from 'styled-components';

import AppRouter from './AppRouter';

if (process.env.NODE_ENV !== 'development') {
  for (const method of [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeStamp',
    'trace',
    'warn',
  ]) {
    // $FlowFixMe
    console[method] = () => {};
  }
}

injectGlobal`
  html,
  body,
  #root {
    position: relative;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
  }
`;

type Theme = {
  [key: string]: any | Theme,
};

type Props = {
  children: React.Element<typeof AppRouter>,
  theme: Theme,
};

class App extends React.Component<Props> {
  render() {
    const { children, theme } = this.props;

    return (
      <React.Fragment>
        <Helmet>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600" />
        </Helmet>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
