// useEffect 

// useEffect(()=>{},[])  1 . 형태 인자 : 콜백함수 ,  렌더링 될때마다 실행 2 . 형태 인자 : 콜백함수 , 의존성 배열
// 화면에 첫 렌더링 될때 , 배열 안의 값이 바뀔 때
//  Mount 
//  Update  Unmount

// Clean Up  - 정리 작업  useEffect(()=>{ // 구독
// return()=>{ // 구독 해지 }
// },[]);  어떤 코드를 실행하는 
// 작업을 했으면 정리하는 작업도 해줘야한다

// 기본적으로 리액트는 매 렌더링 이후에 효과들을 재적용한다  First Render (number=0)

// Componet 

// 1 . 리액트야  이 HTML span(You clicked 0 times)  결과를 렌더링 해	  React  2 . 브라우저야  DOM을 업데이트 하기위해  몇 가지 변경사항이 있어 span(You cliked 0 times)  Browser  3 . 변경사항들을 적용해서 화면에 표시함  	 종속성이라는건 :      이후 타이틀과 같이 한번만 렌더링하고 싶은 것들이 있음. 그럴 때 [] 빈 배열을 넣어주면 됨  const a = ‘string’
// const b = ‘string’ a === b ? true
// 기본형은 이런식의 비교가 참.  const x = {name : “gunho”}
// const y = {name : “gunho”} x === y ? false 참조형은 이런식의 비교가 거짓  그 이유는 함수 , 객체 , 배열은 각각의 값을 기억하는게 아닌  메모리 주소를 기억하게 되는데 객체 안의 값은 같아도 각각 다른 메모리 주소에 저장이 되었기때문에 다르다고 판단하게 되는거임  그럼 다시 useEffect로 돌아와서 useEffect의 두번째 인자인  [state] 가 만약 객체, 함수, 배열이라면의 문제와도 연결 지을 수 있다.  컴퓨터는  기본형 (문자열 숫자 불린 null nudefined )을 보유할 때 값을 보고 비교한다.  하지만 객체 배열 함수(자바스크립트 내부에서의 함수) 자체는 값을 비교하는게 아닌 메모리 주소를 놓고 비교한다. 같은 과일을 담는게 중요한게 아니고 그걸 담은 바구니 다르다는게 중요한 것이다.  그래서 두번째 인자에 넣어줘야할 것은 기본 값이 있는 변수를 넣어주면 된다. 그럼 순수 값이 바뀐걸 보고 렌더할지 말지를 정하기 때문에 다른 부분이 새로 생겨도 useEffect에 렌더가 될 일은 없다.

// 자 그럼 만약 두번째 인자가 배열 , 객체, 함수 인 경우에는 어떻게 해야할까 ? 아주아주 간단하다 / useMemo를 사용해 기억해두면 된다.
//  또 기본 변수로 작성해 사용할 수 있다.   정상적인 업데이트 방식

// Const [number, setNumber] = useState(0)  useEffect(()=>{ console.log(“effect”)
// setInterval(()=>{ 
// // setNumber(number +1) x	setNumber(prev=>prev+1) }, 1000) }, [])    useEffect(()=>{ 	 console.log(“effect runs”)
// //  //return a clean up function  return()=>{ 	// clear someting from the previous effect }
//  },[toggle])

// 위의 useEffect 실행 시 초기 렌더링에서 console.log(“effect runs”) 이 부분이 실행될것입니다. 
// 그 이후 어떠한 기능을 하는 무언가를 만들 수 있습니다.  어떠한 버튼을 클릭했을 때 그 값을 true , false 로 바꾸는 toggle 을 버튼을 만들었다면   클릭하고 나면 그 기능을 실행하기 전에 clean up 함수가 먼저 실행될거임  그 이후 클릭에 등록해놓은  기능이 실행된다.
//  useEffect(()=>{ 	 console.log(“effect runs”)
// //  //return a clean up function  return()=>{ 	console.log(“wait! Before running the effect, I should clean here!”)
// //
// 	console.log(“okey done ! You can run !”) }
//  },[toggle])  첫번째 콘솔이 렌더가 된 뒤에  토글 버튼 클릭 > return (클린업) 콘솔 실행 > 토글 기능 실행