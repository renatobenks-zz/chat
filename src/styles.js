// @flow

import { css } from 'styled-components';

import theme from './theme';

type MediaType = {
  extraSmall: Function,
  small: Function,
  medium: Function,
  large: Function,
  extraLarge: Function,
};

export const media: MediaType = Object.keys(theme.responsive).reduce(
  (accumulator, currentValue) => {
    const { type, unit } = theme.responsive[currentValue];

    return {
      ...accumulator,
      [currentValue]: (...style) => css`
        @media (${type}: ${unit}) {
          ${css(...style)}
        }
      `,
    };
  },
  {
    extraSmall: style => style,
    small: style => style,
    medium: style => style,
    large: style => style,
    extraLarge: style => style,
  },
);
