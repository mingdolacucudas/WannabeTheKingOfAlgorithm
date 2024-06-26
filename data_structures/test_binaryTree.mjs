import { BinaryTree } from "./binary_tree.mjs";

let tree1 = new BinaryTree(1);
let tree2 = new BinaryTree(2);
let tree3 = new BinaryTree(3);
let tree4 = new BinaryTree(4);
let tree5 = new BinaryTree(5);
let tree6 = new BinaryTree(6);

tree1.setLeftSubTree(tree2);
tree1.setRightSubTree(tree3);
tree2.setLeftSubTree(tree4);
tree2.setRightSubTree(tree5);
tree3.setRightSubTree(tree6);
//이렇게 하나씩 수동으로 출려해야하나요???
//트리전체 출력
전위순회;
중위순회;
후위순회;
//트리의 높이가 늘어난다면?
//재귀적으로 적용하기
