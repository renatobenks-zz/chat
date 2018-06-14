// @flow

import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.Element<any>,
};

const Messages = styled.div.attrs({
  children: ({ children }: Props) => children,
})`
  display: flex;
  flex-flow: column wrap;
  flex: 1;
  justify-content: stretch;
  align-items: flex-start;
  padding: 1rem;
`;

export default Messages;
