// @flow

import * as React from 'react';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';

import type { ContextRouter } from 'react-router-dom';

import Content from '../../components/Content/Content';
import Sidebar from '../../components/Sidebar/Sidebar';

const CustomSidebar = styled(Sidebar)`
  background: ${props => props.theme.palette.secondary};
  padding: 2rem;
`;

const User = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
  cursor: pointer;

  &:first-of-type {
    margin: 0;
  }
`;

const UserImage = styled.img`
  width: 100%;
  height: auto;
`;

const UserName = styled.span`
  text-align: center;
  color: white;
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: 400;
`;

const Conversations = styled.div`
  flex-grow: 11;
  text-align: center;
`;

type Props = {
  ...ContextRouter,
  title: string,
};

class Chat extends React.Component<Props> {
  render() {
    return (
      <Content title={this.props.title} style={styles.content}>
        <CustomSidebar>
          <User>
            <UserImage src="https://i.imgur.com/I80W1Q0.png" />
            <UserName>Someone</UserName>
          </User>
          <User>
            <UserImage src="https://i.imgur.com/I80W1Q0.png" />
            <UserName>Another Someone</UserName>
          </User>
        </CustomSidebar>
        <Conversations>
          <h1>Team chat</h1>
        </Conversations>
      </Content>
    );
  }
}

const styles = {
  content: {
    minHeight: '100%',
    display: 'flex',
    flex: 1,
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
};

export default hot(module)(Chat);
