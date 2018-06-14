// @flow

import { LOCAL_STORAGE } from '../contants';

export function getChannel() {
  return localStorage.getItem(LOCAL_STORAGE.CHANNEL);
}

export function isOnChat() {
  return !!getChannel();
}

export function updateChannel(channel: string) {
  localStorage.setItem(LOCAL_STORAGE.CHANNEL, channel);
}

export function removeChannel() {
  localStorage.removeItem(LOCAL_STORAGE.CHANNEL);
}
