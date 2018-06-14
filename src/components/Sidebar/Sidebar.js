// @flow

import styled from 'styled-components';

import { media } from '../../styles';

const Sidebar = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: -${props => props.theme.padding} 0 -${props => props.theme.padding} -${props => props.theme.padding};

  ${media.small`
    flex: 1;
  `};

  ${media.extraSmall`
    flex: 2;
  `};
`;

export default Sidebar;
