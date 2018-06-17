import React from 'react';

import { render } from '../../../test/helpers';

import Badge from './Badge';

const renderer = component => render(component, { withTheme: true });

it('badge with children', () => {
  expect(
    renderer(
      <Badge>
        <span>badge</span>
      </Badge>,
    ),
  ).toMatchSnapshot();
});

it('badge with no children', () => {
  expect(renderer(<Badge />)).toMatchSnapshot();
});

it('badge with style', () => {
  const style = {
    justifyContent: 'flex-start',
  };

  expect(renderer(<Badge style={style} />)).toMatchSnapshot();
});

it('badge with custom size', () => {
  expect(renderer(<Badge size={60} />)).toMatchSnapshot();
});

it('badge with default positions', () => {
  expect(renderer(<Badge top />)).toMatchSnapshot();
  expect(renderer(<Badge left />)).toMatchSnapshot();
  expect(renderer(<Badge bottom />)).toMatchSnapshot();
  expect(renderer(<Badge right />)).toMatchSnapshot();
});

it('badge with custom positions', () => {
  expect(renderer(<Badge top={10} />)).toMatchSnapshot();
  expect(renderer(<Badge left={10} />)).toMatchSnapshot();
  expect(renderer(<Badge bottom={10} />)).toMatchSnapshot();
  expect(renderer(<Badge right={10} />)).toMatchSnapshot();
});
