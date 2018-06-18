// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import type { RouterHistory } from 'react-router-dom';

import drawRoutes from '../../router/drawRoutes';
import routeTo from '../../router/routeTo';
import { ROUTES } from '../../router/routes';

import { removeChannel } from '../../security/channel';

import Header from '../../components/Header/Header';
import Logo from '../../components/Logo/Logo';
import BackButton from '../../components/BackButton/BackButton';

import type { RouteType } from '../../TypeDefinition';

const Wrapper = styled.div`
  max-width: 100%;
  flex: 1;
`;

const CustomHeader = styled(Header)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: flex-start;
`;

type Props = {
  history: RouterHistory,
  routes: Array<RouteType>,
};

class ChatTemplate extends React.Component<Props> {
  logout = () => {
    removeChannel();
    this.props.history.push(routeTo(ROUTES.ONBOARD));
  };

  render() {
    return (
      <Wrapper>
        <CustomHeader>
          <BackButton size={30} onClick={this.logout} />
          <Logo />
        </CustomHeader>
        {drawRoutes(this.props.routes)}
      </Wrapper>
    );
  }
}

export default hot(module)(ChatTemplate);
