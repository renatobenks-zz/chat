import React from 'react';

import { render } from '../../../test/helpers';

import Icon from './Icon';

const renderer = component => render(component, { withTheme: true });

it('icon with any children', () => {
  expect(
    renderer(
      <Icon>
        <span>icon</span>
      </Icon>,
    ),
  ).toMatchSnapshot();
});

it('icon with no children', () => {
  expect(renderer(<Icon />)).toMatchSnapshot();
});

it('icon with custom size', () => {
  expect(renderer(<Icon size={50} />)).toMatchSnapshot();
});

it('icon with no wrapper', () => {
  expect(renderer(<Icon withWrapper={false} />)).toMatchSnapshot();
  expect(
    renderer(
      <Icon withWrapper={false}>
        <span>icon</span>
      </Icon>,
    ),
  ).toMatchSnapshot();
});

it('icon as prop', () => {
  expect(renderer(<Icon icon={<Icon.Back />} />)).toMatchSnapshot();
});

it('icon with static icon as children', () => {
  expect(
    renderer(
      <Icon>
        <Icon.SendMessage />
      </Icon>,
    ),
  ).toMatchSnapshot();

  expect(
    renderer(
      <Icon>
        <Icon.Back />
      </Icon>,
    ),
  ).toMatchSnapshot();
});
