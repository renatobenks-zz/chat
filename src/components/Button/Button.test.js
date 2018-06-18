import React from 'react';
import { css } from 'styled-components';

import { render } from '../../../test/helpers';

import Button from './Button';

const renderer = component => render(component, { withTheme: true });

it('button', () => {
  expect(
    renderer(
      <Button>
        <span>message</span>
      </Button>,
    ),
  ).toMatchSnapshot();
});

it('button with custom background', () => {
  expect(
    renderer(
      <Button background="black">
        <span>message</span>
      </Button>,
    ),
  ).toMatchSnapshot();
});

it('button with custom color', () => {
  expect(renderer(<Button color="white" />)).toMatchSnapshot();
});

it('button with custom styles', () => {
  expect(
    renderer(
      <Button
        styles={css`
          margin: 1rem 0;
        `}
      />,
    ),
  ).toMatchSnapshot();
});

it('handle button click', () => {
  const handler = jest.fn();
  const tree = renderer(<Button onClick={handler} />).toJSON();
  expect(tree).toMatchSnapshot();
  tree.props.onClick();
  expect(handler).toBeCalled();
});
