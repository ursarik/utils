"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addMillisecondsToDate = (milliseconds, date = new Date()) => {
    date.setMilliseconds(date.getMilliseconds() + milliseconds);
};
exports.addMillisecondsToDate = addMillisecondsToDate;
const addSecondsToDate = (seconds, date = new Date()) => {
    date.setSeconds(date.getSeconds() + seconds);
};
exports.addSecondsToDate = addSecondsToDate;
const addHoursToDate = (hours, date = new Date()) => {
    date.setHours(date.getHours() + hours);
};
exports.addHoursToDate = addHoursToDate;
const addDaysToDate = (days, date = new Date()) => {
    date.setDate(date.getDate() + days);
};
exports.addDaysToDate = addDaysToDate;
