const throttle = (msec: number, fn: Function) => {
  let wait = false;
  return (...args: any[]) => {
    if (!wait) {
      wait = true;

      setTimeout(() => {
        wait = false;
      }, msec);

      return fn(...args);
    }
  };
};

export { throttle };
