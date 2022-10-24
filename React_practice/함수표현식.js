// 함수를 변수에 담아서 사용하는 형식 => 함수 표현식
// 변수에 함수를 지정한뒤에 console에 출력해볼경우  f hello(){} 로 나온다. // <constructor>: "Function" 안녕하세요 여러분

console.log(helloB()); // 자바스크립트의 특징 포이스팅  (자바스크립트 내에 선언되어진 함수가 코드 최상단으로 끌어올려진다.)

let hello = function () {
    return "안녕하세요 여러분";

}; // 함수 표현식 -> 이름이 없도록 (무명함수)로 만들어서 변수에 담아서 사용

const helloText = hello();
console.log(helloText);


// 함수 선언식과 표현식의 차이

let helloA = function() {
    return "안녕하세요 여러분";
}; // 함수 표현식

function helloB() {
    return "안녕하세요 여러분";
}; //함수 선언식



//위의 코드는 사실

// function helloB() {
//     return "안녕하세요 여러분";
// }; //함수 선언식

// console.log(helloB());

// let helloA = function() {
//     return "안녕하세요 여러분";
// }; // 함수 표현식

// 와 구조가 같다.

//함수 선언식은 호이스팅이 이루어지지만, 함수 표현식은 호이스팅이 이루어지지 않는다. -> 함수 선언식은 아래에 두어도 된다.
//함수 표현식으로 생성된 식들은 직접 선언되기 전에는 접근이 불가능 하다.


let helloM = function() {
    return "안녕하세요 여러분";
}; // 함수 표현식//function과 중괄호 없이 let으로 변수 선언이후, 소괄호와 화살표를 통해 함수를 표현
console.log(helloM());


/*****************************************************/
//화살표 함수
let helloE = () => {
     return "안녕하세요 여러분"; 
    }; // 함수표현식
console.log(helloE());

// 화살표 함수 문법 
let helloF = () => "안녕하세요 여러분"; // 하나만 리턴하는 경우
// 함수표현식 // 화살표 함수 역시 호이스팅의 개념이 적용되지 않으므로, 실행 순서를 잘 지켜야 한다.
console.log(helloF()); 




