// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1


export class Triangle {

  get lastRow() {
    if (this.rows.length === 0) {
      return undefined;
    }
    return this.rows.slice(-1).pop();
  }

  constructor(numRows) {
    this.rows = [[1]]
    for (let i = 1; i < numRows; i++) {
      const row = [1, ...this.lastRow.map((x, j) => x + (this.lastRow[j + 1] || 0))];
      this.rows.push(row);
    }
    return this;
  }

}