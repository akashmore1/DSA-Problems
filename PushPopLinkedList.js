class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }

    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.length++;

    return this;
  }

  pop() {
    let current = this.head;
    let newTail;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return this;
    }

    this.length--;

    return current;
  }
}
