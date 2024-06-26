// 이진 트리 : 자식이 두개 이하
// 완전 이진트리 : 이진트리에 왼쪽부터 채워지면
// 포화 이진트리 : 이진 트리의 최대 레벨까지 꽉차 있으면

// getdate() : 트리의 데이터 리턴
// setData() : 트리의 데이터 설정
// getLeftSubTree() : 왼쪽 서브 트리 리턴
// getRightSubTree() : 오른쪽 서브 트리 리턴
// setLeftSubTree() : 왼쪽 서브 트리 설정
// setRightSubTree() : 오른쪽 서브 트리 설정
// preOrderTraverse() : 전위 순회
// inOrderTraverse() : 중위 순회
// postOrderTraverse() : 후위 순회
class BinaryTree {
  constructor(data, leftTree = null, rightTree = null) {
    this.data = data;
    this.leftSubTree = leftTree;
    this.rightSubTree = rightTree;
  }
  getData() {
    return this.data;
  }
  setData(data) {
    this.data = data;
  }
  getLeftSubTree() {
    return this.leftSubTree;
  }
  getLeftSubTree() {
    return this.rightSubTree;
  }
  setLeftSubTree(tree) {
    this.leftSubTree = tree;
  }
  setRightSubTree(tree) {
    this.rightSubTree = tree;
  }
  preOrderTraverse(tree) {
    if (tree === null) return; //없다면 리턴
    console.log(tree.data); //출력하고
    this.preOrderTraverse(tree.getLeftSubTree()); //왼쪽 서브트리로 이동
    this.preOrderTraverse(tree.getRightSubTree());
  }
  inOrderTraverse(tree) {
    if (tree === null) return;
    this.inOrderTraverse(tree.getLeftSubTree());
    console.log(tree.data);
    this.inOrderTraverse(tree.getRightSubTree());
  }
  postOrderTraverse(tree) {
    if (tree === null) return;

    this.postOrderTraverse(tree.getLeftSubTree());
    this.postOrderTraverse(tree.getRightSubTree());
    console.log(tree.data);
  }
}
export { BinaryTree };
