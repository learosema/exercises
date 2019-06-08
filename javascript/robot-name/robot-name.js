const rand = (a,b) => a + (((b - a + 1) * Math.random())|0);

const robots = {};

export class Robot {

  constructor() {
    this.reset()
  }

  reset() {
    let name;
    let isUnique = false;
    while (! isUnique) {
      name = String.fromCharCode(rand(65, 90), rand(65, 90), rand(48, 57), rand(48, 57), rand(48, 57));
      isUnique = (name in robots === false)
    }
    this._name = name;
    robots[name] = this;
  }

  get name() {
    return this._name.slice(0);
  }

  set name(value) {
    throw new Error('name is readonly')
  }

  static releaseNames() {
    Object.keys(robots).forEach(name => delete robots[name]);
  }

}

