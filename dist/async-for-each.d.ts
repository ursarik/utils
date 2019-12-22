declare const asyncForEach: <T extends any>(arr: T[], cb: (el: T, i: number, arr: T[]) => Promise<void>) => Promise<void>;
export { asyncForEach };
