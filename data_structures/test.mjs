import { LinkedList, Node } from "./LinkedList.mjs";
import { Stack } from "./Stack.mjs";
import { HashTable } from "./HashTable.mjs";
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

// 덱  deque

// 데이터의 사입과 제거는 헤드 테일 두군데서 가능

// 스택과 큐를 모두 구현 가능

// print all

//해시 테이블 = 해시 + 테이블
//해시 맵, 해시맵, 딕셔너리
//해시함수의 선정이 중요
//장점 : 빠른 데이터 읽기, 키에 대한 데이터 존재 여부 확인, 삽입, 삭제
//단점: 메모리를 많이 차지함, 좋은 해시 함수의 구현은 필수
//set : 삽입
//get : 조회
//remove : 삭제
let hashTable = new HashTable();
hashTable.set(1, "이운재");
hashTable.set(4, "이유리");
hashTable.set(20, "이유빈");
hashTable.set(6, "이현주");
hashTable.set(22, "이현주");
hashTable.set(21, "이현주");
hashTable.set(5, "이현주");
hashTable.set(10, "이현주");

//셋 : 데이터의 중복을 허용하지 않는 자료 구조
//해시테이블 이용 --> hashset
//해시테이블의 value값은 사용하지 않음. key값만 사용
//key: key임과 동시에 값으로도 쓰임.
//add : 데이터 삽입
//isContain : 데이터 존재 여부 확인
//remove : 데이터 삭제
//clear : 전체 삭제
//isEmpty : 비어있는지 확인
//printAll : 전체 출력
