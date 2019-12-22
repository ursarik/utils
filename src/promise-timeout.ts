const setPromiseTimeout = <T extends any>(promise: Promise<T>, msec: number) => {
  return new Promise(async (resolve, reject) => {
    setTimeout(() => reject(new Error("Promise timed out")), msec);

    const result = await promise;
    resolve(result);
  });
};

export { setPromiseTimeout };
