import React, {useState} from "react";
import OddEvenResult from './OddEvenResult'


const Counter = (props) => {
    console.log(props);

// 0에서 출발
// 1씩 증가하고
// 1씩 감소하는
// count 상태
// 상태가 변화하면 함수를 다시 호출하고 rerender한다.

const [count, setCount] = useState(props.initialValue);

// 1씩 증가시키는 함수
const onIncrease = () => {
    setCount(count + 1);
};

const onDecrease = () => {
    setCount(count - 1 );
}

// 유일하게 변화해야하는 값 <h2>

return (
    <div>
        <h2>{count}</h2> 
        <button onClick = {onIncrease}>+</button>
        <button onClick = {onDecrease}>-</button>
        <OddEvenResult count = {count} />
    </div>
);

};

Counter.defalutProps = {
    initialValue: 0,
} 
// 기본을 프롭값을 설정해두면, 값을 전달받지 못해 오류가 날수 있는 경우를 예방 할수 있다.

export default Counter;