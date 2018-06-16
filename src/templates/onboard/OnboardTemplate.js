// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import type { RouterHistory } from 'react-router-dom';

import drawRoutes from '../../router/drawRoutes';
import routeTo from '../../router/routeTo';
import { ROUTES } from '../../router/routes';

import { isOnChat, getChannel } from '../../security/channel';

import Logo from '../../components/Logo/Logo';

import withData from '../../hocs/withData';

import type { WithDataProps } from '../../hocs/withData';
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
  ...WithDataProps,
  history: RouterHistory,
  routes: Array<RouteType>,
};

class OnboardTemplate extends React.Component<Props> {
  componentWillMount() {
    // $FlowFixMe
    if (isOnChat() && this.props.chat[getChannel()]) {
      this.props.history.push(routeTo(ROUTES.CHAT));
    }
  }

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

// $FlowFixMe
const OnboardTemplateContainer = withData(OnboardTemplate);

export default hot(module)(OnboardTemplateContainer);
