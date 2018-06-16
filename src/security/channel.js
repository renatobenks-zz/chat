// @flow

import { LOCAL_STORAGE } from '../constants';

export function getChannel(): string {
  return window.localStorage.getItem(LOCAL_STORAGE.CHANNEL);
}

export function isOnChat(): boolean {
  return !!getChannel();
}

export function updateChannel(channel: string) {
  window.localStorage.setItem(LOCAL_STORAGE.CHANNEL, channel);
}

export function removeChannel() {
  window.localStorage.removeItem(LOCAL_STORAGE.CHANNEL);
}
