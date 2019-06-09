// 1234   123
// * *     *

Array.prototype.sum = function () {
  if (this.length === 0) return 0;
  if (this.length === 1) return this[0];
  return this.reduce((a, b) => a + b);
}

export class Luhn {
  constructor(input) {
    this.input = input;
  }

  get valid() {
    if (! /^[\d\s]+$/.test(this.input)) {
      return false;
    }
    const cleanInput = this.input.replace(/\s/g,'');
    if (cleanInput.length < 2) {
      return false;
    }
    const offset = cleanInput.length % 2;
    const arr = cleanInput.split('').map((char, idx) => {
      if (idx % 2 === offset) {
        return (char | 0) * 2 - (((char | 0) > 4) ? 9 : 0);
      } else {
        return char | 0;
      }
    });
    return arr.sum() % 10 === 0;
  }
}