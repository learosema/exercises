export function isPangram(str) {
  const test = str.toLowerCase().replace(/[\s_]/g, '').split('').sort().join('').replace(/(\w)\1+/g,'$1');
  return /abcdefghijklmnopqrstuvwxyz/.test(test);
}