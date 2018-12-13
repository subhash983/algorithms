import {Node, LinkedList} from "./linkedLists";

let ll = new LinkedList();
ll.insertFirst(11);
ll.insertFirst(12);
ll.insertFirst(13);
ll.insertFirst(14);
ll.insertFirst(15);

const midpoint = ll => {
  let slow = ll.head;
  let fast = ll.head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

console.log(midpoint(ll));
