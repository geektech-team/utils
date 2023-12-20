export const TIME_IN_ONE_MINUTE = 60e3;
export const TIME_IN_ONE_HOUR = 60 * TIME_IN_ONE_MINUTE;
export const TIME_IN_ONE_DAY = 24 * TIME_IN_ONE_HOUR;

export const beginningOfDate = (date: Date) => {
  const result = new Date(date);
  result.setHours(0, 0, 0, 0);
  return result;
};

export const endOfDate = (date: Date) => {
  const result = new Date(date);
  result.setHours(23, 59, 59, 999);
  return result;
};

export const beginningOfNextDay = (date: Date) => { 
    const result = new Date(date);
    result.setHours(24, 0, 0, 0);
    return result;
}

export const beginningOfWeek = (date: Date) => {
  const dayInweek = date.getDay() || 7;
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - dayInweek + 1, 0, 0, 0);
};

export const beginningOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0);
};

export const beginningOfYear = (date: Date) => {
  return new Date(date.getFullYear(), 1, 1, 0, 0, 0);
};
