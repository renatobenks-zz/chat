// @flow

const PUBLIC_PATH = ((process.env.PUBLIC_PATH: any): string);

const SEPARATOR = '/';

const buildPath = (path?: ?string): string => {
  if (PUBLIC_PATH.slice(-1) === SEPARATOR && path === SEPARATOR) return PUBLIC_PATH;
  return `${PUBLIC_PATH}${path || ''}`;
};

export default buildPath;
