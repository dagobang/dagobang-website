import type zh from '../locales/zh.json';

type Messages = typeof zh;

declare global {
  interface IntlMessages extends Messages {}
}

