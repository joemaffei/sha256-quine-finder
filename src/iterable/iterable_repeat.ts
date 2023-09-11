import { iterableFrom } from './iterable_from';
import { ITERATOR_DONE } from './iterator_done';

export function iterableRepeat<T>(value: T, count: number): Iterable<T> {
  return iterableFrom(() => {
    let pointer = count;

    return {
      next: () => {
        if (pointer < 0) {
          return ITERATOR_DONE;
        }

        const result = { value, done: false };
        pointer--;

        return result;
      },
    };
  });
}
