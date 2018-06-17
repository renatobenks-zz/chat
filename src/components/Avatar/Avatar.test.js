import React from 'react';

import { render } from '../../../test/helpers';

import Avatar from './Avatar';

const image = 'image.png';

const renderer = component => render(component, { withTheme: true });

it('avatar with children', () => {
  expect(
    renderer(
      <Avatar avatar={image}>
        <span>anything</span>
      </Avatar>,
    ),
  ).toMatchSnapshot();
});

it('avatar with no children', () => {
  expect(renderer(<Avatar avatar={image} />)).toMatchSnapshot();
});

it('avatar with no image', () => {
  expect(renderer(<Avatar />)).toMatchSnapshot();
});

it('avatar with custom size', () => {
  expect(renderer(<Avatar avatar={image} size="40px" />)).toMatchSnapshot();
});

it('avatar with custom border', () => {
  expect(renderer(<Avatar avatar={image} border="black" />)).toMatchSnapshot();
});
