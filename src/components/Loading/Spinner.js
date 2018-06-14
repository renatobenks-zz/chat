// @flow

import styled from 'styled-components';

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${props => props.color || props.theme.palette.white};
  animation: sk-rotateplane 1.2s infinite ease-in-out;

  @keyframes sk-rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }

    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }

    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }
`;

export default Spinner;
