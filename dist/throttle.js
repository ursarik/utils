"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttle = (msec, fn) => {
    let wait = false;
    return (...args) => {
        if (!wait) {
            wait = true;
            setTimeout(() => {
                wait = false;
            }, msec);
            return fn(...args);
        }
    };
};
exports.throttle = throttle;
