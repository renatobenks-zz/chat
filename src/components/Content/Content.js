// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1;
  padding: ${props => props.theme.padding};
`;

type Props = {
  title: ?string,
  children: React.Element<{}>,
};

const Content = ({ children, title }: Props) => {
  return (
    <Wrapper>
      <Helmet>{title && <title>{title}</title>}</Helmet>
      {children}
    </Wrapper>
  );
};

export default Content;
