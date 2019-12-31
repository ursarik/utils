const pipe = <T>(...fns: Function[]) => (value: T) => fns.reduce((v, f) => f(v), value);

export { pipe };
