const nucleotides = ['A', 'C', 'G', 'T']

export class NucleotideCounts {

  static parse(str) {
    const result = [0, 0, 0, 0];
    str.split('').forEach(char => {
      const i = nucleotides.indexOf(char);
      if (i < 0) {
        throw new Error('Invalid nucleotide in strand');
      }
      result[i] += 1;
    });
    return result.join(' ');
  }
}