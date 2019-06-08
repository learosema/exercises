export function reverseString(str) {
  if (typeof str !== 'string') {
    throw new Error('argument is not a string.')
  }
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}