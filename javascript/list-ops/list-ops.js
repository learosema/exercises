
export class ListNode {
  constructor(value, before = null, next = null) {
    this.value = value;
    this.before = before;
    this.next = next;
  }
}

export class List {

  constructor(array) {
    this.head = this.tail = null;
    if (array instanceof Array) {
      for (let i = 0; i < array.length; i++) {
        this.push(array[i]);
      }
    }
  }

  get values() {
    return this.toArray();
  }

  concat(list) {
    const result = new List(this.toArray());
    const array = list.toArray();
    for (let i = 0; i < array.length; i++) {
      if (array[i] instanceof List) {
        result.append(array[i]);
      } else {
        result.push(array[i])
      }
    }
    return result;
  }

  append(list) {
    const array = list.toArray();
    for (let i = 0; i < array.length; i++) {
      this.push(array[i]);
    }
    return this;
  }

  filter(callback) {
    const result = new List();
    let index = 0;
    for (let iter = this.head; !!iter; iter = iter.next) {
      if (callback(iter.value, index)) {
        result.push(iter.value);
      }
      index++;
    }
    return result;
  }

  map(callback) {
    const result = new List();
    let index = 0;
    for (let iter = this.head; !!iter; iter = iter.next) {
      result.push(callback(iter.value, index))
      index++;
    }
    return result;
  }

  foldl(callback, initialAcc) {
    let result = initialAcc;
    for (let iter = this.head; !!iter; iter = iter.next) {
      result = callback(result, iter.value);
    }
    return result;
  }

  foldr(callback, initialAcc) {
    let result = initialAcc;
    for (let iter = this.tail; !!iter; iter = iter.before) {
      result = callback(result, iter.value);
    }
    return result;
  }

  reverse() {
    const result = new List();
    for (let iter = this.tail; !!iter; iter = iter.before) {
      result.push(iter.value);
    }
    return result;
  }

  push(value) {
    if (! this.head) {
      this.head = this.tail = new ListNode(value);
      return this;
    }
    const newNode = new ListNode(value, this.tail);
    this.tail = newNode;
    this.tail.before.next = this.tail;
    return this;
  }

  pop() {
    if (! this.tail) {
      return undefined;
    }
    const last = this.tail
    if (last.before) {
      last.before.next = null;
    }
    const returnValue = last.value;
    this.tail = last.before;
    if (this.head === last) {
      this.head = this.tail;
    }
    // delete last;
    return returnValue;
  }

  shift() {
    if (! this.head) {
      return undefined;
    }
    const first = this.head;
    const returnValue = first.value;
    this.head = first.next;
    if (this.head) {
      this.head.before = null;
    }
    if (this.tail === first) {
      this.tail = this.head;
    }
    // delete first;
    return returnValue;
  }

  unshift(value) {
    if (this.head === null) {
      this.head = this.tail = new ListNode(value);
      return this;
    }
    const newNode = new ListNode(value, null, this.head);
    this.head.before = newNode;
    this.head = newNode;
  }

  length() {
    if (! this.head) {
      return 0;
    }
    let returnValue = 0;
    for (let iter = this.head; !!iter; iter = iter.next) {
      returnValue++;
    }
    return returnValue;
  }

  delete(value) {
    for (let iter = this.head; !!iter; iter = iter.next) {
      if (iter.value === value) {
        if (iter.before && iter.next) {
          iter.before.next = iter.next;
          iter.next.before = iter.before;
          iter = null;
          return this;
        }
        if (iter.before && !iter.next) {
          iter.before.next = null;
          this.tail = iter.before;
          return this;
        }
        if (!iter.before && iter.next) {
          iter.next.before = null;
          this.head = iter.next;
        }
        if (!iter.before && !iter.next) {
          this.tail = this.head = null;
        }
        return this;
      }
    }
  }

  toArray() {
    const returnValue = []
    for (let iter = this.head; !!iter; iter = iter.next) {
      returnValue.push(iter.value)
    }
    return returnValue;
  }

  toString() {
    return 'List [' + this.toArray().join(', ') + ']';
  }

  static fromArray(array = []) {
    const list = new List(array instanceof Array ? array : []);
    return list;
  }

}
