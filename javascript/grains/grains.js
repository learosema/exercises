import bigInt from './lib/big-integer';

export class Grains {

  square(num) {
    // native BigInt:
    // return (2n ** BigInt(num - 1)).toString();
    return bigInt(2).pow(num - 1).toString();
  }

  total() {
    // native BigInt:
    // return (2n ** 64n - 1n).toString();
    return bigInt(2).pow(64).minus(1).toString();
  }

}