"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};
exports.generateRandomNumber = generateRandomNumber;
