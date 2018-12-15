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
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
//console.log(isCircular(ll));

const detectAndRemoveLoop = ll => {
  let slow = ll.head;
  let fast = ll.head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      //  removeLoop(slow, ll.head);
      removeLoopBetter(slow, ll.head);
      return;
    }
  }
};

const removeLoop = (loopNode, head) => {
  let currentNode = head;
  let loopCurrentNode = loopNode;
  while (currentNode) {
    loopCurrentNode = loopNode;
    while (
      loopCurrentNode.next !== currentNode &&
      loopCurrentNode.next !== loopNode
    ) {
      loopCurrentNode = loopCurrentNode.next;
    }
    if (loopCurrentNode.next === currentNode) {
      break;
    }
    currentNode = currentNode.next;
  }
  loopCurrentNode.next = null;
};

const removeLoopBetter = (loopNode, head) => {
  //counting number of nodes in loop
  let currentLoopNode = loopNode;
  let count = 1;
  while (currentLoopNode.next !== loopNode) {
    count++;
    currentLoopNode = currentLoopNode.next;
  }
  let nthNodeFromHead = head;
  for (let i = 0; i < count; i++) {
    nthNodeFromHead = nthNodeFromHead.next;
  }
  let currentNode = head;
  while (currentNode) {
    if (currentNode.next === nthNodeFromHead.next) {
      nthNodeFromHead.next = null;
      break;
    }
    currentNode = currentNode.next;
    nthNodeFromHead = nthNodeFromHead.next;
  }
};
detectAndRemoveLoop(ll);
console.log(ll.getLast());
