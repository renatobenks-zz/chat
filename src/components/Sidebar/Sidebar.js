// @flow

import styled from 'styled-components';

const Sidebar = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column wrap;
  margin: -${props => props.theme.padding} 0 -${props => props.theme.padding} -${props => props.theme.padding};
`;

export default Sidebar;
