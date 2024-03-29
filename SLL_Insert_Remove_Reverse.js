"use strict";

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
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      return this;
    }

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return this;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    this.head = current.next;
    current.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  set(index, value) {
    let node = this.get(index);
    node.val = value;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return undefined;

    if (index === 0) {
      this.unshift(value);
      return this;
    }

    if (index === this.length) {
      this.push(value);
      return this;
    }

    const newNode = new Node(value);

    const current = this.get(index);
    const prev = this.get(index - 1);

    newNode.next = current;
    prev.next = newNode;
    this.length++;

    return this;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
      return this.shift();
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const prev = this.get(index);
    const current = this.get(index);
    prev.next = current.next;
    current.next = null;

    this.length--;
    return current;
  }

  reverse() {
    // We will need prev, current, next nodes
    // Iteratively we will point current to prev then next to current
    let prev = null;
    let current = this.head;
    let next;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}

let sl = new SinglyLinkedList();
sl.push(1);
sl.push(2);
sl.push(3);
sl.push(4);
sl.push(5);
sl.push(6);
