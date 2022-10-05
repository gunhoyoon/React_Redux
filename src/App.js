import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중 ...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }, []);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    setUsers(users.concat(user));

    setInputs({
      username: "",
      email: "",
    });
    nextId.current += 1;
  }, [users, username]);

  const onRemove = useCallback((id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);
  // const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);
  // 첫번째 파라미터 : 어떻게 연산할지 정의하는 함수
  // 두번째 파라미터 :deps의 배열을 넣어주면 된다.
  // 이 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호춣해서 값을 연산해주고,
  // 만약 내용이 바뀌지 않았다면 이전에 연산한 겂을 재사용하게 된다.
  // 그래서 리렌더링이 되지 않기때문에 불필요한 호출도 없앨 수 있게 된다.

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
      {/* count에 할당 */}
    </>
  );
}

export default App;
/* 이 상태에서 isSpecial 한테 true가 아닌 아무것도 넘겨주지 않게된다면,
        true를 넘겨준거랑 동일하게 본다. */

/* Wraaper 안에 넣은 값을 조회하고 싶을 땐 , Wrapper 에서 props.children */
