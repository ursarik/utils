const addMillisecondsToDate = (milliseconds: number, date = new Date()) => {
  date.setMilliseconds(date.getMilliseconds() + milliseconds);
};

const addSecondsToDate = (seconds: number, date = new Date()) => {
  date.setSeconds(date.getSeconds() + seconds);
};

const addHoursToDate = (hours: number, date = new Date()) => {
  date.setHours(date.getHours() + hours);
};

const addDaysToDate = (days: number, date = new Date()) => {
  date.setDate(date.getDate() + days);
};

export { addMillisecondsToDate, addSecondsToDate, addHoursToDate, addDaysToDate };
