import { LinkedList } from "./LinkedList.mjs";

class Stack {
  //스택 초기화시 빈리스트 생성
  constructor() {
    this.list = new LinkedList();
  }
  //연결리스트의 헤드에 삽입
  push(data) {
    this.list.insertAt(0, data);
  }
  //연결리스트의 헤드에서 제거
  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count == 0;
  }
}

export { Stack };
