declare class NonBlocking {
    static INTERVAL: number;
    static each<T>(array: T[], fn: (el: T, i: number, array: T[]) => void): void;
    static asyncEach<T>(array: T[], fn: (el: T, i: number, array: T[]) => Promise<void> | void): Promise<void>;
}
export { NonBlocking };
