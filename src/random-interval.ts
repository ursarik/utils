import { generateRandomNumber } from "./generate-random-number";

const randomInterval = (intervalRange: number[], errFn: (err: Error) => void | null, fn: Function, ...fnArgs: any[]) => {
  const next = (args: any[]) => {
    const [min, max] = intervalRange;
    const msec = generateRandomNumber(min, max);

    setTimeout(() => {
      try {
        fn(...args);
      } catch (err) {
        if (errFn) errFn(err);
      } finally {
        next(args);
      }
    }, msec);
  };

  next(fnArgs);
};

export { randomInterval };
