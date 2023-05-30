/**
 * time format
 * @param time Date
 * @param format
 * @returns {*}
 */
export function timeFormat(time: Date, format = "yyyy-MM-dd hh:mm:ss"): string {
  const year = `${time.getFullYear()}`;
  let month = `${time.getMonth() + 1}`;
  if (month.length === 1) month = `0${month}`;
  let day = `${time.getDate()}`;
  if (day.length === 1) day = `0${day}`;
  let hours = `${time.getHours()}`;
  if (hours.length === 1) hours = `0${hours}`;
  let minutes = `${time.getMinutes()}`;
  if (minutes.length === 1) minutes = `0${minutes}`;
  let seconds = `${time.getSeconds()}`;
  if (seconds.length === 1) seconds = `0${seconds}`;
  return format
    .replace(/yyyy/g, year)
    .replace(/MM/g, month)
    .replace(/dd/g, day)

    .replace(/hh/g, hours)
    .replace(/mm/g, minutes)
    .replace(/ss/g, seconds);
}
