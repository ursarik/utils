const asyncForEach = async <T extends any>(arr: T[], cb: (el: T, i: number, arr: T[]) => Promise<void>) => {
  for (let i = 0; i < arr.length; i++) {
    await cb(arr[i], i, arr);
  }
};

export { asyncForEach };
