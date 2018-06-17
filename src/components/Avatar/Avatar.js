// @flow

import styled from 'styled-components';

const Avatar = styled.img.attrs({
  src: ({ avatar }) => avatar,
})`
  width: ${props => props.size || props.theme.avatar.size};
  height: auto;
  border-radius: 50%;
  border: 2px solid ${props => props.border || props.theme.palette.white};
  margin: 0;
`;

export default Avatar;
