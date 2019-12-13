"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiIncludes = (str, values) => {
    const re = new RegExp(values.map(val => val.toLowerCase()).join("|"));
    return re.test(str);
};
exports.multiIncludes = multiIncludes;
