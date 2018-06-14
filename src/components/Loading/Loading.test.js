import React from 'react';

import { render } from '../../../test/helpers';

import Loading, { TYPES } from './Loading';

const renderer = component => render(component, { withTheme: true });

it('loading as default', () => {
  expect(renderer(<Loading />)).toMatchSnapshot();
});

it('full loading', () => {
  expect(renderer(<Loading full />)).toMatchSnapshot();
});

it('spinner loading type', () => {
  expect(renderer(<Loading type={TYPES.SPINNER} />)).toMatchSnapshot();
});

it('not visible loading', () => {
  expect(renderer(<Loading visible={false} />)).toMatchSnapshot();
});
