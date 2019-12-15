"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const throttle = (msec, fn) => {
    let lastCalled = null;
    return (...args) => {
        const now = Date.now();
        if (lastCalled && now - lastCalled < msec)
            return;
        lastCalled = now;
        return fn(...args);
    };
};
exports.throttle = throttle;
