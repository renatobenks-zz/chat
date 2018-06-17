// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import Circle from './Circle/Circle';

import type { StyleProp } from '../../TypeDefinition';

const Wrapper = styled.div`
  ${props =>
    (props.top || props.left || props.bottom || props.right) &&
    css`
      position: absolute;
    `};

  width: ${props => props.size}px;
  height: ${props => props.size}px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props =>
    props.top &&
    css`
      margin-top: ${({ top }) => (top !== true ? `${top}px` : '100%')};
    `};

  ${props =>
    props.left &&
    css`
      margin-left: ${({ left }) => (left !== true ? `${left}px` : '100%')};
    `};

  ${props =>
    props.bottom &&
    css`
      margin-bottom: ${({ bottom }) => (bottom !== true ? `${bottom}px` : '100%')};
    `};

  ${props =>
    props.right &&
    css`
      margin-right: ${({ right }) => (right !== true ? `${right}px` : '100%')};
    `};

  > svg {
    width: 100%;
  }
`;

type Props = {
  size?: number,
  children: React.Element<typeof Circle>,
  top?: number | boolean,
  left?: number | boolean,
  right?: number | boolean,
  bottom?: number | boolean,
  style?: StyleProp,
};

const Badge = ({ children, style, ...props }: Props) => {
  return (
    <Wrapper {...props} style={style}>
      {children}
    </Wrapper>
  );
};

Badge.Circle = Circle;

Badge.defaultProps = {
  size: 20,
};

export default Badge;
