// @flow

import document from './document';
import localStorage from './localStorage';

const window = {
  document,
  localStorage,
};

global.window = window;
export default window;
