import { LinkedList, Node } from "./LinkedList.mjs";
import { Stack } from "./Stack.mjs";

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);

// node1.next = node2;
// node2.next = node3;
// console.log(node1.data);
// console.log(node1.next.data);
// console.log(node1.next.next.data);

// let list = new LinkedList();
// console.log("=============insertAt() 다섯번 호출======");
// list.insertAt(0, 0);
// list.insertAt(1, 1);
// list.insertAt(2, 2);
// list.insertAt(3, 3);
// list.insertAt(4, 4);
// list.printAll();
// console.log("clear함수 호출");
// list.clear();
// list.printAll();
let stack = new Stack();
console.log("첫번째 출력");
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
//큐
//마트계산 : 먼저줄을선 손님이 먼저계산하는것이 큐
//운영체제가 보낸 프로세스를 cpu가 순차적으로 처리 -->fifo스케줄링
//구현 : head부터 차례대로 추가 그러나 삭제일 경우 head를 따고 계속 next로 이동한뒤 맨뒤에 node를 삭제해야함. 그래서 tail노드를 만들어 양방향으로 구현예정
//enque: 데이터삽입
//deque: 데이터 제거
//front : 데이터 참조
