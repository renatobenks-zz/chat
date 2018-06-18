import React from 'react';

import { render } from '../../../../test/helpers';

import Back from './Back';

const renderer = component => render(component, { withTheme: true });

it('icon back', () => {
  expect(renderer(<Back />)).toMatchSnapshot();
});

it('icon back with custom color', () => {
  expect(renderer(<Back color="white" />)).toMatchSnapshot();
});
