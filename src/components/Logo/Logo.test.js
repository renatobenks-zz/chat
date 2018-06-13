import React from 'react';
import renderer from 'react-test-renderer';

import Logo from './Logo';

it('renders logo as default', () => {
  expect(renderer.create(<Logo />)).toMatchSnapshot();
});

it('renders logo without title', () => {
  expect(renderer.create(<Logo withTitle={false} />)).toMatchSnapshot();
});

it('renders logo with customized size', () => {
  expect(renderer.create(<Logo size={40} />)).toMatchSnapshot();
});
