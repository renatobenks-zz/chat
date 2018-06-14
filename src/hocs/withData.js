// @flow

import * as React from 'react';

import type { ContextRouter } from 'react-router-dom';

import data from '../data';

import type { Data } from '../data';

type Props = {
  ...ContextRouter,
};

export type WithDataProps = Props & Data;

export default function withData(Component: React.ComponentType<Props & Data>): React.ComponentType<Props & Data> {
  return (props: Props) => <Component {...props} {...data} />;
}
