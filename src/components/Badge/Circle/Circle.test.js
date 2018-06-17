import React from 'react';

import { render } from '../../../../test/helpers';

import Circle from './Circle';

const renderer = component => render(component, { withTheme: true });

it('default circle', () => {
  expect(renderer(<Circle />)).toMatchSnapshot();
});

it('circle with custom color', () => {
  expect(renderer(<Circle color="gray" />)).toMatchSnapshot();
});

it('circle with border', () => {
  expect(renderer(<Circle border />)).toMatchSnapshot();
});

it('circle with custom border', () => {
  expect(renderer(<Circle border="red" />)).toMatchSnapshot();
});
