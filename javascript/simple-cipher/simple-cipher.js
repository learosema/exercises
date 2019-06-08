
const rand = (a, b) => a + (((b - a + 1) * Math.random())|0)
export class Cipher {
  constructor(key) {
    if (key || key === '') {
      if (/^[a-z]{2,}$/.test(key) === false) {
        throw new Error('Bad key')
      }
    }
    this.key = key || Array(rand(100, 120)).fill(0).map(chr => String.fromCodePoint(rand(97,122))).join('');
  }

  encode(message) {
    let result = "";
    for (let i = 0; i < message.length; i++) {
      result += String.fromCodePoint(97 +
        (message.codePointAt(i) - 97 +
        this.key.codePointAt(i % this.key.length) - 97) % 26);
    }
    return result;
  }

  decode(message) {
    let result = "";
    for (let i = 0; i < message.length; i++) {
      let a = message.codePointAt(i) - 97;
      let b = this.key.codePointAt(i % this.key.length) - 97;
      result += String.fromCodePoint(a - b + ((a- b) < 0? 26:0) + 97);
    }
    return result;
  }

}