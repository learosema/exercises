export class Squares {
  constructor(N) {
    this.N = N;
  }

  get squareOfSum() {
    const sum = Array(this.N).fill(0).map((_, i) => (i + 1)).reduce((a, b) => a + b )
    return Math.pow(sum, 2);
  }

  get sumOfSquares() {
    const sumSquares = Array(this.N).fill(0).map((_, i) => Math.pow((i + 1), 2)).reduce((a, b) => a + b)
    return sumSquares;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}