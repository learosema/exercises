export class ArgumentError extends Error {
  constructor(message) {
    super(message);
  }
}

export class WordProblem {
  constructor(question) {
    this.question = question;
  }

  answer() {
    const check = /^What\sis\s((\-|)\d+)(\s(plus|minus|multiplied\sby|divided\sby)\s((\-|)\d+))*\?$/
    if (! check.test(this.question)) {
      throw new ArgumentError('Invalid question.');
    }
    // simplify things: remove the What is and the question mark. 
    // Also tokenize things. Replace space before `by` by an underscore.
    const parsed = this.question.slice(8, -1).replace(/\sby/g, '_by').split(' ');
    let result = undefined;
    let op = undefined;
    const operations = {
      plus: (a, b) => a + b,
      minus: (a, b) => a - b,
      multiplied_by: (a, b) => a * b,
      divided_by: (a, b) => a / b
    };
    for (let iter = 0; iter < parsed.length; iter++) {
      if (iter % 2 === 0) {
        const parsedNumber = parseInt(parsed[iter], 10);
        if (iter === 0) {
          result = parsedNumber
        } else {
          if (op in operations) {
            result = operations[op](result, parsedNumber);
          }
        }
      } else {
        op = parsed[iter];
      }
    }
    return result;
  }
}