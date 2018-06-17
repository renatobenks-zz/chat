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

it('avatar with default size', () => {
  expect(renderer(<Avatar avatar={image} />)).toMatchSnapshot();
  expect(renderer(<Avatar avatar={image} size={null} />)).toMatchSnapshot();
  expect(renderer(<Avatar avatar={image} size={0} />)).toMatchSnapshot();
});

it('avatar with custom size', () => {
  expect(renderer(<Avatar avatar={image} size="40px" />)).toMatchSnapshot();
});

it('avatar with no border', () => {
  expect(renderer(<Avatar avatar={image} />)).toMatchSnapshot();
  expect(renderer(<Avatar avatar={image} border={null} />)).toMatchSnapshot();
  expect(renderer(<Avatar avatar={image} border={0} />)).toMatchSnapshot();
});

it('avatar with border', () => {
  expect(renderer(<Avatar border avatar={image} />)).toMatchSnapshot();
});

it('avatar with custom border', () => {
  expect(renderer(<Avatar avatar={image} border="black" />)).toMatchSnapshot();
});
