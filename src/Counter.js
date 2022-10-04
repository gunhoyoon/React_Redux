import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  //함수형 업데이트
  // setter에 함수를 등록하는 방식으로 값을 업데이트
  // 함수형 업데이트는 주로 컴포넌트를 최적화할 때 사용

  //number = 현재 상태
  //setNumber = Setter 함수는 파라미터로 전달 받은 값을 최신 상태로 설정해줍니다.
  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    } else setNumber((prevNumber) => prevNumber - 0);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
