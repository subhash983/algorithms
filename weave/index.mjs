import {Queue} from "./queue";

const weave = (sourceOne, sourceTwo) => {
  let result = new Queue();
  while (sourceOne.peak() !== undefined || sourceTwo.peak() != undefined) {
    if (sourceOne.peak() !== undefined) {
      result.add(sourceOne.remove());
    }
    if (sourceTwo.peak() != undefined) {
      result.add(sourceTwo.remove());
    }
  }
  return result;
};

let sourceOne = new Queue();
sourceOne.add(1);
sourceOne.add(2);
sourceOne.add(3);
let sourceTwo = new Queue();
sourceTwo.add("Hi");
sourceTwo.add("There");

let q = weave(sourceOne, sourceTwo);
console.log(q.remove());
console.log(q.remove());
