"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NonBlocking {
    static each(array, fn) {
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
                }
                else {
                    fn(array[i], i++, array);
                }
            }
        };
        next();
    }
}
exports.NonBlocking = NonBlocking;
NonBlocking.INTERVAL = 10;
