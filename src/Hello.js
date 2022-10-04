import React from "react";
import App from "./App";

function Hello({ color, name, isSpecial }) {
  // 프롭스 쪼개서 받아오기
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null}
      {/* JSX에서  null , false , undefined 를 렌더하게 된다면 아무것도 나타나지 않는다 */}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
  // defaultProps =  컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용할 값을 설정.
};

export default Hello;
