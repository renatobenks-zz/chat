// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import Spinner from './Spinner';

export const TYPES = {
  SPINNER: 'spinner',
};

type Type = $Values<typeof TYPES>;

const SPINNERS = {
  [TYPES.SPINNER]: Spinner,
};

const Wrapper = styled.section`
  display: flex;
  padding: 1rem;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  background: ${props => props.background || props.theme.palette.primary};
  ${props =>
    props.full &&
    css`
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 99;
    `};
`;

type Props = {
  visible?: boolean,
  full?: boolean,
  type?: Type,
  color?: string,
  background?: string,
  children?: React.Element<any>,
};

const Loading = ({
  visible, full, type, background, children, ...props 
}: Props) => {
  if (!visible) return null;

  const Spinner = (type && SPINNERS[type]) || SPINNERS[TYPES.SPINNER];

  return (
    <Wrapper full={full} background={background}>
      <Spinner {...props} />
      {children}
    </Wrapper>
  );
};

Loading.defaultProps = {
  visible: true,
  full: false,
};

export default Loading;
