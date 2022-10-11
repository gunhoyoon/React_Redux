import React, { useContext } from "react";
import { UserDispacth } from "./App";

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispacth);
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_USER", id: user.id });
        }}
      >
        삭제
      </button>
    </div>
  );
});
// React.memo 2개의 동작이 존재할 때, 하난 export 하난 직접 감싸주기

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);

// 가장 가까이에 있는 context의 provider에 매칭되는 값을
// 불러온다

// Context API 를 사용해서 dispatch 를 어디서든지 조회해서 사용해줄 수 있게 해주면 코드의 구조가 훨씬 깔끔해질 수 있습니다.
