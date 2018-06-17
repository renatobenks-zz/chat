// @flow

import styled, { css } from 'styled-components';

const Avatar = styled.img.attrs({
  src: ({ avatar }) => avatar,
})`
  width: ${props => props.size || props.theme.avatar.size};
  height: auto;
  border-radius: 50%;
  ${props =>
    props.border &&
    css`
      border: 2px solid ${props.border !== true ? props.border : props.theme.palette.white};
    `};
  margin: 0;
`;

export default Avatar;
