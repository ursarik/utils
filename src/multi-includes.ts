const multiIncludes = (str: string, values: string[]) => {
  const re = new RegExp(values.map(val => val.toLowerCase()).join("|"));
  return re.test(str);
};

export { multiIncludes };
