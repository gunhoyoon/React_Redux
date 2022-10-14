import produce from "immer";

const state = {
  number: 1,
  dontChangeMe: 2,
};

const nextState = produce(state, (draft) => {
  draft.number += 1;
});

console.log(nextState);

// immer을 사용해 간단해지는 업데이트가 있고 오히려 코드가 길어질 수 있음
// 상황에 따라 concat , filter , map 을 사용하는게 코드가 더 짧을 수 있다.

// produce 함수를 사용할 땐 첫번째 파라미터에는 수정하고 싶은 상태, state
// 두번째 파라미터에는 어떻게 업데이트하고 싶을지 정의하는 함수를 넣어준다. dreft=>{}

// 성능적으로는 immer을 사용하지 않은 코드가 조금 더 빠름
