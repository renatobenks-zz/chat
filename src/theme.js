// @flow

import logo from './static/svg/logo/logo.svg';

const theme = {
  palette: {
    primary: '#24E28B',
    secondary: '#1FC6C1',
    gray: '#828796',
    white: '#fff',
    black: '#000',
    yellow: '#ffff00',
  },
  responsive: {
    extraSmall: {
      type: 'max-width',
      unit: '576px',
    },
    small: {
      type: 'min-width',
      unit: '576px',
    },
    medium: {
      type: 'min-width',
      unit: '768px',
    },
    large: {
      type: 'min-width',
      unit: '992px',
    },
    extraLarge: {
      type: 'min-width',
      unit: '1200px',
    },
  },
  svg: {
    logo,
  },
  padding: '1rem',
  header: {
    height: '70px',
  },
  avatar: {
    size: '4rem',
  },
};

export default theme;
