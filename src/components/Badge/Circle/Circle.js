// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

const SVGCircle = styled.circle`
  fill: ${props => props.color || props.theme.palette.white};
  ${props =>
    props.border &&
    css`
      stroke: ${props.border !== true ? props.border : props.theme.palette.black};
      stroke-width: 10px;
    `};
`;

type Props = {
  color?: string,
  border?: string,
};

const Circle = ({ color, border }: Props) => {
  return (
    <svg viewBox="0 0 120 120">
      <SVGCircle color={color} border={border} cx="60" cy="60" r="50" />
    </svg>
  );
};

export default Circle;
