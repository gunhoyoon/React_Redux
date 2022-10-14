// CRA(Create - React - App);
import React, { Component } from "react";

class Counter extends Component {
  // 인스턴스 관계 끊기는 해결책 1
  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }
  handleIncrease() {
    console.log("increase");
  }
  handleDecrease() {
    console.log("decrease");
  }

  render() {
    return (
      <div>
        <h1>0</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;

//클래스는 클래스 안에 커스텀 메서드를 선언합니다.
//클래스에서 커스텀 메서드를 만들게 될 때에는 보통 이름을 handle... 이라고 이름을 짓습니다.
// 추후 상태를 업데이트할 할때에는 이 메서드에서 this.setState 라는 함수를 사용해야 하는데요.
// this 는 컴포넌트 인스턴스를 가르켜야 하는데,
// 현재 구현한 handleIncrease 와 handleDecrease에서는 this 를 조회하려고 하면 컴포넌트 인스턴스를 가르키지 않게 됩니다.
// 실제로 handleIncrease에서 this를 콘솔에 출력하면 undefined가 나타나게 된다.

// 이렇게 되는 이유는, 우리가 만든 메서드들을 각 버튼의 이벤트로 등록하는 과정에서 각 메서드와 컴포넌트의
// 인스턴스 관계가 끊기기 때문입니다. +++****
// 이를 해결하는 3가지 방법
// 1. 클래스 첫번째 생성자 메서드 constructor 에서 bind 작업을 해주는 것이다.
// 함수의 bine를 사용하면 , 해당 함수에서 가르킬 this를 직접 설정해줄 수 있다.
// constructor에서는 props 파라미터로 받아오고 super(props) 로 호출해주어야하는데
// 이는 이 클래스가 컴포넌트로써 작동할 수 있도록 해주는 Component쪽에 구현되어있는
// 생성자 함수를 먼저 실행해주고, 우리가 할 작업을 하겠다 라는 의미임.

// 2 . 화살표 함수를 사용해서 메서드를 구현(가장 편함)
