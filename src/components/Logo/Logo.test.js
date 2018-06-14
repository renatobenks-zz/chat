import React from 'react';

import { render } from '../../../test/helpers';

import Logo from './Logo';

const renderer = component => render(component, { withTheme: true });

it('renders logo as default', () => {
  expect(renderer(<Logo />)).toMatchSnapshot();
});

it('renders logo without title', () => {
  expect(renderer(<Logo withTitle={false} />)).toMatchSnapshot();
});

it('renders logo with customized size', () => {
  expect(renderer(<Logo size={40} />)).toMatchSnapshot();
});
