import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false); //useState()사용법: const [변수명, set함수명] = useState(초기값);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => { //useEffect()사용법: useEffect(이펙트함수, 의존성배열); 
    console.log("===================");
    console.log("useEffect() is called.");
    console.log(`isFull: ${isFull}`);
  }); //해당 useEffect는 의존성 배열 생략. 의존성배열을 생략하면 컴포넌트가 업데이트 될때마다 호출됨.
  //이것은 useEffect() 훅이 아무 것에도 의존하지 않는다는 것이며, 결국 매번 렌더링 될 때마다 Effect 함수가 실행.

   
  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);   
  //count 값이 변경되면 count 값을 의존성 배열에 갖고 있는 두 번째 useEffect()의 Effect 함수가 실행되며,
  //해당 Effect 함수 내에서 setIsFull() 함수를 호출하여 isFull이라는 state의 값이 변경되고,
  //이로 인해 재렌더링이 일어나면서 첫 번째 useEffect()의 Effect 함수도 실행되는 것.
  //그리고 추가로 useEffect()훅의 의존성 배열에 빈 배열(empty array)을 넣게 되면, 컴포넌트가 처음 마운트 된 이후에만 Effect 함수가 실행.
  //increaseCount() 함수 호출로 인해서 count가 변경되면서 재렌더링 1번
  //count가 변경됨으로 인해 두 번째 useEffect() 훅의 Effect 함수가 실행되고 setIsFull() 호출로 isFull의 값이 true로 변경되면서 재렌더링 1번

  return (
    <div style={{ padding: 16 }}>
      <p>{`총 ${count}명 수용했습니다.`}</p>

      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: "red" }}>정원이 가득 찼습니다.</p>} 
      {/* JSX에서는 중괄호 안에 JavaScript 코드를 사용할 수 있는데,
      그 안에서 JavaScript의 && 연산자를 사용해서 조건부 렌더링(Conditional Rendering)을 하는 코드 */}
    </div>
  );

}

export default Accommodate;