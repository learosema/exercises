
export class ListNode {
  constructor(value, before = null, next = null) {
    this.value = value;
    this.before = before;
    this.next = next;
  }
}

export class LinkedList {

  constructor() {
    this.head = this.tail = null;
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

  count() {
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

}
