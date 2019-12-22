"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generate_random_number_1 = require("./generate-random-number");
const randomInterval = (intervalRange, errFn, fn, ...fnArgs) => {
    const next = (args) => {
        const [min, max] = intervalRange;
        const msec = generate_random_number_1.generateRandomNumber(min, max);
        setTimeout(() => {
            try {
                fn(...args);
            }
            catch (err) {
                if (errFn)
                    errFn(err);
            }
            finally {
                next(args);
            }
        }, msec);
    };
    next(fnArgs);
};
exports.randomInterval = randomInterval;
