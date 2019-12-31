"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe = (...fns) => (value) => fns.reduce((v, f) => f(v), value);
exports.pipe = pipe;
