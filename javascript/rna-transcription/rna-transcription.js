const complements = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
}

export function toRna(dna) {
  return dna.split('').map(n => complements[n]).join('');
}