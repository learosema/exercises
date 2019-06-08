export function transform(input) {
  const output = {};
  Object.keys(input).forEach(key => {
    input[key].forEach(char => {
      output[char.toLowerCase()] = parseInt(key, 10);
    });
  });
  return output;
}