// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';

import SendMessage from './SendMessage/SendMessage';
import Back from './Back/Back';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
    `};

  > svg {
    width: 100%;
  }
`;

type Props = {
  withWrapper?: boolean,
  size?: number,
  children: React.Element<typeof SendMessage> | React.Element<typeof Back>,
};

const Icon = ({ size, withWrapper, children }: Props) => {
  if (!withWrapper) return children;

  return <IconWrapper size={size}>{children}</IconWrapper>;
};

Icon.defaultProps = {
  withWrapper: true,
  size: 40,
};

Icon.SendMessage = SendMessage;
Icon.Back = Back;

export default Icon;
