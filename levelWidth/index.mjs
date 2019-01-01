import {Node} from "./node";

const levelWidth = root => {
  const nodes = [root, "s"];
  const widthArr = [0];
  while (nodes.length > 1) {
    let node = nodes.shift();
    if (node === "s") {
      nodes.push(node);
      widthArr.push(0);
    } else {
      widthArr[widthArr.length - 1] += 1;
      nodes.push(...node.children);
    }
  }
  return widthArr;
};
let root = new Node(10);
root.add(20);
root.add(30);
root.add(40);
console.log(levelWidth(root));
