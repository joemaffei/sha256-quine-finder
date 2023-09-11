import { iterableFrom } from './iterable_from';
import { ITERATOR_DONE } from './iterator_done';

export function iterableRange(start: number, length: number): Iterable<number> {
  return iterableFrom(() => {
    const end = start + length;
    let pointer = start;

    return {
      next: () => {
        if (pointer >= end) {
          return ITERATOR_DONE;
        }

        const result = { value: pointer, done: false };
        pointer++;

        return result;
      },
    };
  });
}
