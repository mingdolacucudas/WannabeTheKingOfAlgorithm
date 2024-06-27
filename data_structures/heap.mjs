import { BinaryTree } from "./binary_tree.mjs";
//힙 : 차곡차곡 완전이진트리를 쌓아올린 형태

class Heap {
  constructor() {
    this.root = null;
    this.lastInsertedNode = null;
  }
  insert(data) {
    if (this.lastInsertedNode === null) {
      //null이라면 데이터는 처음삽입하는 경우
      this.lastInsertedNode = new BinaryTree(data);
      this.root = this.lastInsertedNode;
      return;
    }
    let insertingParent = this.getInsertingParent();
    let newNode = new BinaryTree(data);
  }
  isBigPriority(parent, newNode) {
    return parent.data > newNode.data;
  }
}

//마지막 부모노드에서 오른쪽 형제노드가 있는지 확인
//오른쪽 형제노드가 없다면 왼쪽 자식노드로 삽입
//오른쪽 형제노드가 있다면 다음 레벨로 이동
