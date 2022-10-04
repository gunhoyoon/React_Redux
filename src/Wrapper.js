import React from "react";

function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
  };
  return <div style={style}>{children}</div>;
  // App 에서 Wrapper안에 감싼 태그들을 보여지게 하려면 props.children 사용
}

export default Wrapper;
