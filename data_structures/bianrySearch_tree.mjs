import { BinaryTree } from "./binary_tree.mjs";
//이진탐색트리
// 1. 중복된 노드가 없어야함
// 2. 특정 노드의 왼쪽 자식 노드는 해당 노드보다 작아야함
// 기능 : 데이터 삽입, 제거, 탐색
// insert(data) : 데이터 삽입
// search(data) : 데이터 탐색
// remove(data) : 데이터 제거

class BinarySearchTree {
  constructor(rootNoe = null) {
    this.root = rootNode;
  }
  insert(data) {
    if (this.root === null) {
      this.root = new BinaryTree(data);
      return;
    }
    let currentNode = this.root;
    let parentNode = null;

    while (currentNode !== null) {
      parentNode = currentNode;
      if (data < currentNode.getData()) {
        currentNode = currentNode.getLeftSubTree();
      } else if (data > currentNode.getData()) {
        currentNode = currentNode.getRightSubTree();
      } else {
        return;
      }
    }
  }
}
// 이진탐색트리: 중복된 노드가 없어야함.자식노드는 왼쪽이 작아야함, 오른쪽이 크다.
// 삽입과 제거시 균형을 유지해야함. -> AVL트리, 레드블랙트리(자가균형 이진탐색트리)
