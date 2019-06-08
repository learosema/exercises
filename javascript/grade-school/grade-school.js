export class GradeSchool {
  constructor() {
    this._roster = {}
  }

  roster() {
    const result = {};
    for (let [key, value] of Object.entries(this._roster)) {
      if (value instanceof Array) {
        result[key] = value.slice(0);
      }
    }
    return result;
  }

  add(student, grade) {
    if (!(grade in this._roster)) {
      this._roster[grade] = []
    }
    this._roster[grade].push(student)
    this._roster[grade].sort();
  }

  grade(g) {
    if (!(g in this._roster)) {
      return []
    }
    return this._roster[g].slice(0)
  }

}