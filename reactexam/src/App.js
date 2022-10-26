import Myheader from './Myheader';
// import './App.css';
// 인라인 스타일 방식

import React from "react";

function App() {
   let name = "soo";  


  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
    color: "red",
    },
    bold_text: {
    color: "green",
    },

  };

  const number = 5;

  return (
   
    <div style={style.App}>
      <Myheader/>
        <h2 style={style.h2}> 안녕 리액트{name} </h2>
       <b style = {style.bold_text} id = "bold_text">
      {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
      </b>
    </div>
   
  );
}

export default App;
//export defalut로 내보낸 함수는 다른 파일에서 import해서 사용할수 있고, 하나만 내보낼수 있다.

