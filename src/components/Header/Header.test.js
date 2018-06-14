import React from 'react';

import { render } from '../../../test/helpers';

import Header from './Header';

const renderer = component => render(component, { withTheme: true });

it('renders correctly', () => {
  expect(
    renderer(
      <Header>
        <span>text into header</span>
      </Header>,
    ),
  ).toMatchSnapshot();
});
