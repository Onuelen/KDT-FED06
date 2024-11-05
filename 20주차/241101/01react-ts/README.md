UI 변경
삭제 기능
데이터 보관,저장 기능 \_ 로컬스토리지

다이어리
칼로리 계산기
뮤직플레이어 등 만들 수 있음

Recoil : 전역환경에서 state의 변수를 관리,제어 기능
atom
useRecoilState
useRecoilValue
useSetRecoilState

React-baeutiful-dnd :

- DragDropContext
- Droppable
- DraggableCard

- Droppable & Draggable : ID값
- Dragable : key 값
- 함수의 형태로 값을 전달해야 하는 구조!! 매직,스냅샷 사용 하려면 필수
- magic , snapshot

- onDragEnd

React-hook-form > useForm

> form 요소 활용

최초 생성된 state의 자료구조가 객체 > 배열 형태
: 갹채 내 대괄호 표기법을 활용해서 데이터 제어
: splice를 활용한 배열 내 데이터 편집
: 원시타입 & 참조변수 => 참조타입 변수 복제 => 전개연산자 구문

타입 정의:

- 스타일 컴포넌트 : props의 자료타입 => 타입정의!!
  snapshot : D&D를 하는 순간 발생되는 Action 형태 -> boolean값 반환
  > UI 관리!!!
