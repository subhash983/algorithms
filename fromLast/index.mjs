import {Node, LinkedList} from "./linkedLists";

let ll = new LinkedList();
let n1 = new Node(10);
let n2 = new Node(11, n1);
let n3 = new Node(12, n2);
let n4 = new Node(13, n3);
let n5 = new Node(14, n4);

ll.head = n5;

const fromLast = (ll,n)=>{
  let p1=ll.head;
  let p2=ll.head;
  for (let i = 0; i < n; i++) {
    p2=p2.next;
  }
  while (p2.next) {
    p1=p1.next;
    p2=p2.next;
  }
  return p1;
}

console.log(fromLast(ll,4));
