export function hasMethod(object: unknown, method: string | symbol): boolean {
  return (
    null !== object &&
    undefined !== object &&
    typeof (object as any)[method] === 'function'
  );
}
