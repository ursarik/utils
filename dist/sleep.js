"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sleep = (msec) => {
    return new Promise(resolve => {
        setTimeout(resolve, msec);
    });
};
exports.sleep = sleep;
