import React, { useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
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
  const onCreate = () => {
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
  };

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
/* 이 상태에서 isSpecial 한테 true가 아닌 아무것도 넘겨주지 않게된다면,
        true를 넘겨준거랑 동일하게 본다. */

/* Wraaper 안에 넣은 값을 조회하고 싶을 땐 , Wrapper 에서 props.children */
