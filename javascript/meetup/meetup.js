export function meetupDay(year, monthIndex, dayOfWeek, when) {
  const weekDays = {
    "Sunday": 0,
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6
  };
  if (!(dayOfWeek in weekDays)) {
    throw new Error('Invalid Argument for third parameter dayOfWeek.')
  }
  const nth = {
    "1st": 0,
    "2nd": 1,
    "3rd": 2,
    "4th": 3,
    "5th": 4
  };
  // const firstDayOfMonth = new Date(year, monthIndex, 1);
  // const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
  if (when === 'last') {
    for (let i = -6; i <= 0; i++) {
      const d = new Date(year, monthIndex + 1, i);
      if (d.getDay() === weekDays[dayOfWeek]) {
        return d;
      }
    }
    return null;
  }
  if (when === 'teenth') {
    for (let i = 13; i <= 19; i++) {
      const d = new Date(year, monthIndex, i);
      if (d.getDay() === weekDays[dayOfWeek]) {
        return d;
      }
    }
    return null;
  }
  if (when in nth) {
    const day = weekDays[dayOfWeek];
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const firstWeekDay = firstDayOfMonth.getDay();
    const dayDiff = (day - firstWeekDay) + (firstWeekDay > day ? 7 : 0);
    const resultDate = new Date(year, monthIndex, 1 + dayDiff + nth[when] * 7);
    if (resultDate.getMonth() !== monthIndex) {
      throw new Error('invalid meetupDay.')
    }
    return resultDate;
  }
  throw new Error('invalid input.');
}