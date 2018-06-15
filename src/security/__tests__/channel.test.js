import localStorage from 'localStorage';

import { getChannel, isOnChat, updateChannel, removeChannel } from '../channel';

import { LOCAL_STORAGE } from '../../constants';

it('get channel from local storage', () => {
  getChannel();
  expect(localStorage.getItem).toBeCalledWith(LOCAL_STORAGE.CHANNEL);
});

it('check if already has channel saved', () => {
  expect(isOnChat()).toBe(Boolean(getChannel()));
});

it('update channel in local storage', () => {
  const channel = 'Channel';
  updateChannel(channel);
  expect(localStorage.setItem).toBeCalledWith(LOCAL_STORAGE.CHANNEL, channel);
});

it('remove channel already saved in local storage', () => {
  removeChannel();
  expect(localStorage.removeItem).toBeCalledWith(LOCAL_STORAGE.CHANNEL);
});

afterEach(() => {
  localStorage.getItem.mockClear();
  localStorage.setItem.mockClear();
  localStorage.removeItem.mockClear();
});
