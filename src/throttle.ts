const throttle = (msec: number, fn: Function) => {
  let lastCalled = null;

  return (...args: any[]) => {
    const now = Date.now();
    if (lastCalled && now - lastCalled < msec) return;

    lastCalled = now;

    return fn(...args);
  };
};

export { throttle };
