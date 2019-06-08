class Clock {
  constructor(hours, minutes) {
    return this.setTime(hours, minutes)
  }

  setTime(hours, minutes = 0) {
    if (minutes < 0) {
      const underflowHours = ((-minutes/60)|0) + 1;
      minutes += underflowHours * 60;
      hours -= underflowHours;
    }
    if (hours < 0) {
      const underflowDays = ((-hours/24)|0) + 1;
      hours += underflowDays * 24;
    }
    this.hours = (hours + ((minutes / 60)|0)) % 24;
    this.minutes = minutes % 60;
    return this;
  }

  plus(minutes) {
    return this.setTime(this.hours, this.minutes + minutes);
  }

  minus(minutes) {
    return this.setTime(this.hours, this.minutes - minutes);
  }

  toString() {
    return [
      this.hours < 10 ? ("0" + this.hours) : this.hours,
      this.minutes < 10 ? ("0" + this.minutes) : this.minutes
    ].join(':');
  }

  equals(otherClock) {
    return (this.hours === otherClock.hours && this.minutes === otherClock.minutes);
  }
}

export function at(h, m) {
  return new Clock(h, m);
}