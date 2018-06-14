import buildPath from '../buildPath';

const url = '/path';
const { PUBLIC_PATH } = process.env;

it(`build the path to /`, () => {
  expect(buildPath('/')).toBe(PUBLIC_PATH);
  expect(buildPath(null)).toBe(PUBLIC_PATH);
  expect(buildPath()).toBe(PUBLIC_PATH);
});

it(`build the path to ${url}`, () => {
  expect(buildPath(url)).toBe(PUBLIC_PATH + url);
});
