import { EMPTY_ITERATOR } from './empty_iterator';

export const EMPTY_ITERABLE: Iterable<never> = Object.freeze({
  [Symbol.iterator]: () => EMPTY_ITERATOR,
});
