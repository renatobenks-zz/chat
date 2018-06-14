// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import type { RouterHistory } from 'react-router-dom';

import drawRoutes from '../../router/drawRoutes';

import Logo from '../../components/Logo/Logo';

import type { RouteType } from '../../TypeDefinition';

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  min-height: 100%;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.palette.primary};
`;

const Divider = styled.hr`
  width: 100%;
  height: 1px;
  background: ${props => props.theme.palette.white};
  border: none;
`;

const Header = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 1rem 0;
  background: ${props => props.theme.palette.white};
  border-radius: 1rem;
`;

type Props = {
  history: RouterHistory,
  routes: Array<RouteType>,
};

class OnboardTemplate extends React.Component<Props> {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo size={40} />
        </Header>
        <Divider />
        {drawRoutes(this.props.routes)}
      </Wrapper>
    );
  }
}

export default hot(module)(OnboardTemplate);
