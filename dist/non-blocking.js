"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
                    break;
                }
                else {
                    fn(array[i], i++, array);
                }
            }
        };
        next();
    }
    static asyncEach(array, fn) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            let time = Date.now();
            let i = 0;
            const last = array.length - 1;
            const next = () => __awaiter(this, void 0, void 0, function* () {
                while (i <= last) {
                    const now = Date.now();
                    const diff = now - time;
                    if (diff > this.INTERVAL) {
                        time = now;
                        setTimeout(next, 0);
                        return;
                    }
                    else {
                        yield fn(array[i], i++, array);
                    }
                }
                resolve();
            });
            next();
        }));
    }
}
exports.NonBlocking = NonBlocking;
NonBlocking.INTERVAL = 10;
