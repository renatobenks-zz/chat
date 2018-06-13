// @flow

import * as React from 'react';
import styled from 'styled-components';

import Logo from './components/Logo/Logo';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
`;

const Header = styled.header`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => props.theme.palette.white};
  border-bottom: 1.5px solid ${props => props.theme.palette.secondary};
  height: 90px;
  padding: 1rem;
`;

export default class AppRouter extends React.Component<void> {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo />
        </Header>
      </Wrapper>
    );
  }
}
