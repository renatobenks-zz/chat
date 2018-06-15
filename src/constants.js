// @flow

export const LOCAL_STORAGE = {
  CHANNEL: 'channel',
};

export type LocalStorage = $Values<typeof LOCAL_STORAGE>;

export const EVENT_HANDLERS = {
  KEYBOARD_CODES: {
    ENTER: 13,
  },
};

export type EventHandlers = $Values<typeof EVENT_HANDLERS>;
