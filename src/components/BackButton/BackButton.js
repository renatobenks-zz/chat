// @flow

import * as React from 'react';
import { withRouter } from 'react-router-dom';

import type { RouterHistory } from 'react-router-dom';

import theme from '../../theme';

import Button from '../Button/Button';
import Icon from '../Icon/Icon';

type Props = {
  history: RouterHistory,
  size?: number,
  background?: ?string,
  color?: string,
  onBack?: () => void,
  onClick?: () => void,
};

class BackButton extends React.Component<Props> {
  static defaultProps = {
    color: theme.palette.gray,
  };

  goBack = () => {
    const { onBack } = this.props;
    onBack && onBack();
    this.props.history.goBack();
  };

  render() {
    const {
      size, background, color, onClick 
    } = this.props;

    return (
      <Button background={background} onClick={onClick || this.goBack}>
        <Icon size={size}>
          <Icon.Back color={color} />
        </Icon>
      </Button>
    );
  }
}

export default withRouter(BackButton);
