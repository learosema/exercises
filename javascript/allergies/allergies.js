const allergenes = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats',
]

export class Allergies {

  constructor(number) {
    this.number = number;
  }

  list() {
    const { number } = this;
    const list = []
    allergenes.forEach((allergene, index) => {
      if (number & (1 << index)) {
        list.push(allergenes[index]);
      }
    });
    return list;
  }

  allergicTo(allergene) {
    const { number } = this;
    const index = allergenes.indexOf(allergene);
    if (index < 0) {
      throw new Error('unknown allergene.');
    }
    return (!!(number & (1 << index)));
  }

}
