// @flow

import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.palette.white};
  border-bottom: 1.5px solid ${props => props.theme.palette.secondary};
  height: 90px;
  padding: ${props => props.theme.padding};
`;

export default Header;
