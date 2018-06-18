// @flow

import * as React from 'react';
import styled from 'styled-components';

import SendMessageIcon from './SendMessageIcon/SendMessageIcon';

const IconWrapper = styled.div`
  width: ${props => props.size && `${props.size}px`};
  height: ${props => props.size && `${props.size}px`};
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 100%;
  }
`;

type Props = {
  withWrapper?: boolean,
  children: React.Element<typeof SendMessageIcon>,
  size?: number,
  color?: string,
};

const Icon = ({ size, withWrapper, children }: Props) => {
  if (!withWrapper) return children;

  return <IconWrapper size={size}>{children}</IconWrapper>;
};

Icon.defaultProps = {
  withWrapper: true,
};

Icon.SendMessage = SendMessageIcon;

export default Icon;
