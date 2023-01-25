export type EventType = "page";

export type EventProperties = {
  host: string;
  hash: string;
  height: number;
  path: string;
  search: string;
  title: string;
  url: string;
  width: number;
};

export type Event = {
  type: EventType;
  properties: EventProperties;
  timestamp: string;
};

export type ExtensionEvent = {
  type: EventType;
  meta: {
    ts: Number;
  };
  properties: EventProperties;
  userId: string;
};

export type UserFile = {
  name: string;
  hash: string;
  size: string | number;
};