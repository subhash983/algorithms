class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (this.head) {
      this.head = this.head.next;
    }
    return this;
  }
  removeLast() {
    if (this.head) {
      if (this.head.next) {
        let currentNode = this.head;
        let previousNode;
        while (currentNode.next) {
          previousNode = currentNode;
          currentNode = currentNode.next;
        }
        previousNode.next = null;
      } else {
        this.head = null;
      }
    }
    return this;
  }
  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let currentNode = this.head;
    let cIndex = 0;
    while (currentNode) {
      if (cIndex === index) {
        break;
      }
      cIndex++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  insertAt(index, data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index == 0) {
      this.head = new Node(data, this.head);
    }
    let previous = this.getAt(index - 1) || this.getLast();
    previous.next = new Node(data, previous.next);
  }
  forEach(fn) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode) {
      fn(currentNode, index);
      index++;
      currentNode = currentNode.next;
    }
  }
  *[Symbol.iterator](){
    let currentNode = this.head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.next;
    }
  }
}

export {
  Node,
  LinkedList
};
