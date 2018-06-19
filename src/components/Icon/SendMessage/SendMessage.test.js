import React from 'react';

import { render } from '../../../../test/helpers';

import SendMessage from './SendMessage';

const renderer = component => render(component, { withTheme: true });

it('send message icon', () => {
  expect(renderer(<SendMessage />)).toMatchSnapshot();
});

it('send message icon with custom color', () => {
  expect(renderer(<SendMessage color="pink" />)).toMatchSnapshot();
});
