class NonBlocking {
  static INTERVAL = 10;

  static each<T>(array: T[], fn: (el: T, i: number, array: T[]) => void) {
    let time = Date.now();
    let i = 0;
    const last = array.length - 1;

    const next = () => {
      while (i <= last) {
        const now = Date.now();
        const diff = now - time;

        if (diff > this.INTERVAL) {
          time = now;
          setTimeout(next, 0);
          break;
        } else {
          fn(array[i], i++, array);
        }
      }
    };

    next();
  }
}

export { NonBlocking };
