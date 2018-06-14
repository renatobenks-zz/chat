import React from 'react';

import { render } from '../../../test/helpers';

import Sidebar from './Sidebar';

it('renders the sidebar', () => {
  expect(
    render(
      <Sidebar>
        <span>simple text</span>
      </Sidebar>,
    ),
  ).toMatchSnapshot();
});
