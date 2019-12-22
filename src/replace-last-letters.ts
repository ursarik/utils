const replaceLastLetters = (str: string, count: number, replacer: string) => {
  const letters = str.split("");
  const last = letters.length - 1;

  for (let i = last; i > letters.length - count; i--) {
    letters[i] = replacer;
  }

  return letters.join("");
};

export { replaceLastLetters };
