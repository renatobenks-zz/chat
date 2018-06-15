import React from 'react';

import { render } from '../../../test/helpers';

import Messages from './Messages';

const renderer = component => render(component, { withTheme: true });

it('messages with children', () => {
  expect(
    renderer(
      <Messages>
        <span>message</span>
      </Messages>,
    ),
  ).toMatchSnapshot();
});

it('messages with no children', () => {
  expect(renderer(<Messages />)).toMatchSnapshot();
});
