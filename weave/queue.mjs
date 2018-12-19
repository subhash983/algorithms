class Queue {
  constructor() {
    this.data = [];
  }
  add(item) {
    this.data.unshift(item);
  }
  remove() {
    return this.data.pop();
  }
  peak() {
    return this.data[this.data.length - 1];
  }
}

export {Queue};
