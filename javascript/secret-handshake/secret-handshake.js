export function secretHandshake(input) {
  if (! /\d+/.test(input)) {
    throw new Error('Handshake must be a number');
  }
  const num = parseInt(input, 10);
  const result = []
  if (num & 1) {
    result.push('wink');
  }
  if (num & 2) {
    result.push('double blink');
  }
  if (num & 4) {
    result.push('close your eyes');
  }
  if (num & 8) {
    result.push('jump');
  }
  return num & 16 ? result.reverse() : result;
}