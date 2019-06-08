const scores = '1332142418513113a11114484a'.split('').map(x => parseInt(x, 16));


export function score(word) {
  let result = 0;
  word.toUpperCase().split('').forEach(char => {
    const code = char.codePointAt(0);
    if (code < 65 || code > 90) {
      throw new Error('Invalid character ' + char);
    }
    result += scores[code - 65];
  });
  return result;
}
