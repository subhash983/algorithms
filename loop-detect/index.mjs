import {Node, LinkedList} from "./linkedLists";

let ll = new LinkedList();
let n1 = new Node(10);
let n2 = new Node(11, n1);
let n3 = new Node(12, n2);
let n4 = new Node(13, n3);
let n5 = new Node(14, n4);
n1.next = n3;

ll.head = n5;

const isCircular = ll => {
  let slow = ll.head;
  let fast = ll.head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
    console.log(fast);
    console.log(slow);
    if (fast === slow) {
      return true;
    }
  }
  return false;
};

console.log(isCircular(ll));
