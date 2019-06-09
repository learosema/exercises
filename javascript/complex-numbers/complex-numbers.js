export class ComplexNumber {
  constructor(real, imag = 0) {
    this.real = real;
    this.imag = imag;
  }

  get abs() {
    const { real, imag } = this;
    return Math.sqrt(real * real + imag * imag);
  }

  get exp() {
    const { real, imag } = this
    const { E, cos, sin } = Math
    return new ComplexNumber(E ** real).mul(new ComplexNumber(cos(imag), sin(imag)));
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag === 0 ? 0 : -this.imag);
  }

  add(b) {
    const { real, imag } = this;
    return new ComplexNumber(real + b.real, imag + b.imag);
  }

  sub(b) {
    const { real, imag } = this;
    return new ComplexNumber(real - b.real, imag - b.imag);
  }

  mul(b) {
    // const x = `(a + i * b) * (c + i * d) = (a * c - b * d) + (b * c + a * d) * i`
    const { real, imag } = this;
    return new ComplexNumber(real * b.real - imag * b.imag, imag * b.real + real * b.imag);
  }

  div(b) {
    const x = `(a + i * b) / (c + i * d) = 
       (a * c + b * d)/(c^2 + d^2) + (b * c - a * d)/(c^2 + d^2) * i`
    const { real, imag } = this;
    return new ComplexNumber(
      (real * b.real + imag * b.imag) / (b.real ** 2 + b.imag ** 2),
      (imag * b.real - real * b.imag) / (b.real ** 2 + b.imag ** 2))
  }
}