export function convert(num) {
  const result = [];
  if (num % 3 === 0) {
    result.push('Pling');
  }
  if (num % 5 === 0) {
    result.push('Plang');
  }
  if (num % 7 === 0) {
    result.push('Plong');
  }
  if (result.length === 0) {
    return num.toString();
  }
  return result.join('');
}