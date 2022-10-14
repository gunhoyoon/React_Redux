// import React from "react";
// import App from "./App";

// function Hello({ color, name, isSpecial }) {
//   // 프롭스 쪼개서 받아오기
//   return (
//     <div style={{ color }}>
//       {isSpecial ? <b>*</b> : null}
//       {/* JSX에서  null , false , undefined 를 렌더하게 된다면 아무것도 나타나지 않는다 */}
//       안녕하세요 {name}
//     </div>
//   );
// }

// Hello.defaultProps = {
//   name: "이름없음",
//   // defaultProps =  컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용할 값을 설정.
// };

// export default Hello;

import React, { Component } from "react";

class Hello extends Component {
  render() {
    const { color, name, isSpecial } = this.props;
    return <div style={{ color }}>{isSpecial && <b>*</b>}</div>;
  }
}
Hello.defaultProps = {
  name: "이름없음",
};
export default Hello;

// 클래스형 컴포넌트에서는 render() 메서드가 꼭 있어야 한다.
// 이 메서드에서 렌더링하고 싶은 JSX를 반환하면 된다.
// 그리고 props 를 조회할 때는 this.props 를 조회하면 된다.
