// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';

import type { ReactTestRenderer } from 'react-test-renderer';

import theme from '../src/theme';

function create(component: React.Element<any>): ReactTestRenderer {
  return renderer.create(component);
}

type RenderParams = {
  withTheme: boolean,
};

export function render(component: React.Element<any>, params: RenderParams): ReactTestRenderer {
  if (params.withTheme) return create(withTheme(component));
  return create(component);
}

export function withTheme(component: React.Element<any>): React.Element<typeof ThemeProvider> {
  return <ThemeProvider theme={theme}>{component}</ThemeProvider>;
}
