import { ITERATOR_DONE } from './iterator_done';

export const EMPTY_ITERATOR: Iterator<never> = Object.freeze({
  next: () => ITERATOR_DONE,
});
