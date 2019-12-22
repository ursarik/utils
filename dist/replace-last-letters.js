"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const replaceLastLetters = (str, count, replacer) => {
    const letters = str.split("");
    const last = letters.length - 1;
    for (let i = last; i > letters.length - count; i--) {
        letters[i] = replacer;
    }
    return letters.join("");
};
exports.replaceLastLetters = replaceLastLetters;
