import React from 'react';

import { render } from '../../../test/helpers';

import Message from './Message';

const renderer = component => render(component, { withTheme: true });

it('message with not children', () => {
  expect(renderer(<Message />)).toMatchSnapshot();
});

it('message with children', () => {
  expect(renderer(<Message>some message</Message>)).toMatchSnapshot();
});

it('message with label', () => {
  expect(renderer(<Message label="some label">some message</Message>)).toMatchSnapshot();
});

it('message from me', () => {
  expect(renderer(<Message isFromMe={true}>some message</Message>)).toMatchSnapshot();
});

it('message with avatar', () => {
  expect(renderer(<Message avatar={'image.png'}>some message</Message>)).toMatchSnapshot();
});

it('message with avatar from me', () => {
  expect(
    renderer(
      <Message isFromMe avatar={'image.png'}>
        some message
      </Message>,
    ),
  ).toMatchSnapshot();
});
