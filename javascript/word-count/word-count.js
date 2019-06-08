export class Words {
  constructor() {

  }

  count(str) {
    const words = (str || '').trim().split(/[\s\t\n]+/);
    const result = Object.create(null, {});
    words.forEach(word => {
      word = word.toLowerCase();
      if (word in result) {
        result[word] += 1
      } else {
        result[word] = 1;
      }
    });
    return result;
  }
}