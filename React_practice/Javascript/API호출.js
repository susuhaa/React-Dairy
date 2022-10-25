// API 호출
// json place holder - resources tap -> post

// let response = fetch("https://jsonplaceholder.typicode.com/posts").then((res) => 
// console.log(res)
// );

// 데이터들은 json형태를 가지고 있다.

//API 연습하기

async function getData() {
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}

getData();


