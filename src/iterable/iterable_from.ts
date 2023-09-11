import { Getter } from '../utilities';

export function iterableFrom<T>(getIterator: Getter<Iterator<T>>): Iterable<T> {
  return {
    [Symbol.iterator]: () => getIterator(),
  };
}
