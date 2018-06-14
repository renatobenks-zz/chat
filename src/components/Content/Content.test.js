import React from 'react';
import renderer from 'react-test-renderer';

import Content from './Content';

const title = 'Mocked title';

it('renders content children with title', () => {
  expect(
    renderer.create(
      <Content title={title}>
        <span>Awesome title with: {title}</span>
      </Content>,
    ),
  ).toMatchSnapshot();
});

it('renders content children with no title', () => {
  expect(
    renderer.create(
      <Content>
        <span>No title</span>
      </Content>,
    ),
  ).toMatchSnapshot();
});
