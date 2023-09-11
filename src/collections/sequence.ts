import {
  getIterator,
  iterableRange,
  iterableRepeat,
  EMPTY_ITERABLE,
} from '../iterable';

export class Sequence<T> implements Iterable<T> {
  static readonly EMPTY = new Sequence(EMPTY_ITERABLE);

  static readonly [Symbol.toStringTag] = 'Sequence';

  static range(start: number, length: number): Sequence<number> {
    return new this(iterableRange(start, length));
  }

  static repeat<T>(value: T, count: number): Sequence<T> {
    return new this(iterableRepeat(value, count));
  }

  private readonly _source: Iterable<T>;

  get source(): Iterable<T> {
    return this._source;
  }

  constructor(source: Iterable<T>) {
    this._source = source;
  }

  [Symbol.iterator](): Iterator<T> {
    return getIterator(this.source);
  }
}
