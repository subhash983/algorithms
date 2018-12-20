import {Stack} from './stack';

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  add(record){
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
    this.stack1.push(record);
  }
  remove(){
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
  peek(){
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.peek();
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
console.log(q.peek());
console.log(q.remove());
q.add(4);
console.log(q.remove());
console.log(q.remove());
console.log(q.remove());
