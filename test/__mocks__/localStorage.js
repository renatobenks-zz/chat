// @flow

const getItem: jest.fn<$ReadOnlyArray<string>, any> = jest.fn((key: string) => {
  return localStorage.STORE[key];
});

const setItem: jest.fn<$ReadOnlyArray<string>, void> = jest.fn((key: string, value: any) => {
  localStorage.STORE[key] = value;
});

const removeItem: jest.fn<$ReadOnlyArray<string>, void> = jest.fn((key: string) => {
  delete localStorage.STORE[key];
});

const localStorage = {
  STORE: {},
  getItem,
  setItem,
  removeItem,
};

global.localStorage = localStorage;
export default localStorage;
