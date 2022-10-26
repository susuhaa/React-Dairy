import Myheader from './Myheader';
import Counter from './counter';
import Container from './Container';


// import './App.css';
// 인라인 스타일 방식

import React from "react";

function App() {
   
  const number = 5;

const counterProps ={
  a:1,
  b:2,
  c:3,
  d:4,
  e:5,
  initialValue : 5,
}


  return (
   <Container>
    <div>
      <Myheader/>
      <Counter {...counterProps} />
 
  {/* app 컴퍼넌트의 자식 */}
    </div>
    </Container>
   
  );
}

export default App;
//export defalut로 내보낸 함수는 다른 파일에서 import해서 사용할수 있고, 하나만 내보낼수 있다.

