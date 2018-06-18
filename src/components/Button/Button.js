// @flow

import * as React from 'react';
import styled from 'styled-components';

import type { Interpolation, TaggedTemplateLiteral } from 'styled-components';

const CustomButton = styled.button`
  margin: 1rem;
  padding: ${props => props.theme.padding};
  background: ${props => props.background || 'transparent'};
  color: ${props => props.color || props.theme.palette.primary};
  border: none;
  cursor: pointer;

  svg {
    fill: ${props => props.color || props.theme.palette.primary};
  }

  ${props => props.styles};
`;

type Props = {
  children: React.Element<any>,
  styles?: TaggedTemplateLiteral<Array<Interpolation>>,
  background?: ?string,
  color?: ?string,
  onClick: () => void,
};

const Button = ({
  children, styles, background, color, onClick 
}: Props) => {
  return (
    <CustomButton background={background} color={color} styles={styles} onClick={onClick}>
      {children}
    </CustomButton>
  );
};

export default Button;
