export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  kind() {
    const {a, b, c} = this;
    const sides = [a, b, c].sort((a,b) => a - b);
    if (a <= 0 || b <= 0 || c <= 0 || (sides[0] + sides[1] < sides[2])) {
      throw new Error('invalid triangle');
    }
    if (a === b  && b === c) {
      return 'equilateral';
    }
    if (a === b || b === c || a === c) {
      return 'isosceles';
    }
    return 'scalene';
  }
}