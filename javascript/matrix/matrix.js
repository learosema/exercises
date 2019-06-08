export class Matrix {
  constructor(input) {
    this.rows = input.split('\n').map(row => row.split(' ').map(x => parseInt(x)));
    const colLen = this.rows.map(row => row.length).reduce((a,b) => Math.max(a,b))
    this.columns = [];
    for (let j = 0; j < colLen; j++) {
      const col = []
      for (let i = 0; i < this.rows.length; i++) {
        col.push(this.rows[i][j]);
      }
      this.columns.push(col);
    }
  }
}