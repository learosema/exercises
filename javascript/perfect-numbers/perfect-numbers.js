const allFactors = (n) => Array(n - 1).fill(0).map((_, i) => (i + 1)).filter(x => n % x === 0);
const aliquot = (n) => {
  const factors = allFactors(n);
  return (factors.length === 0) ? 0 : factors.reduce((a,b) => a + b);
}

export function classify(n) {
  if (n <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }
  const aliquotSum = aliquot(n);
  if (aliquotSum === n) {
    return 'perfect';
  }
  if (aliquotSum > n) {
    return 'abundant';
  }
  if (aliquotSum < n) {
    return 'deficient';
  }
}