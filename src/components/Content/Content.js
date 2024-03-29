// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  padding: ${props => props.theme.padding};
`;

type Children = React.Element<any>;

type Props = {
  title: ?string,
  children: Array<?Children> | Children | null,
  style?: {
    [key: string]: any,
  },
};

const Content = ({ children, title, style }: Props) => {
  return (
    <Wrapper style={style}>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      {children}
    </Wrapper>
  );
};

export default Content;
