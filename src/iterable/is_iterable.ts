import { hasMethod } from '../utilities';

export function isIterable<T>(object: unknown): object is Iterable<T> {
  return hasMethod(object, Symbol.iterator);
}
