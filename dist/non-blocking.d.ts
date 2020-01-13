declare class NonBlocking {
    static INTERVAL: number;
    static each<T>(array: T[], fn: (el: T, i: number, array: T[]) => void): void;
}
export { NonBlocking };
