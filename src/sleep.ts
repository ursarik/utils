const sleep = (msec: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, msec);
  });
};

export { sleep };
