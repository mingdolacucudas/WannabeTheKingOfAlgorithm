class Node {
  constructor(data, next = null) {
    //초기화
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";
    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;
      if (currentNode != null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }
  clear() {
    //참고하는것이 없게 만들어줌.
    this.head = null;
    this.count = 0;
  }
  //원한는 인덱스에 데이터삽입
  insertAt(index, data) {
    //연결리스트의 크기보다 크거나, 범위를 넘어가는 경우 예외처리
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }
    let newNode = new Node(data);
    //맨 앞에 삽입하는 경우
    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      //앞에노드와 뒤에노드를 연결해준다.
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }
  insertLast(data) {
    //인덱스에 현재리스트의 크기를 넣음.
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index > this.count || index < 0) {
      throw new Error("제거할 수 없습니다");
    }
    let currentNode = this.head;
    if (index == 0) {
      let deleteNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.next;
      }
      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deleteNode;
    }
  }
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }
}
export { Node, LinkedList };
