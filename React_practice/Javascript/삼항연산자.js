// 삼항연산자

let a = 3;
a>= 0? console.log("양수") : console.log("음수");
// 조건식 + ?(앞의 식이 조건식임을 나타내기 위함) + 참일때 수행할 식 + 거짓일때 수행할 식을 적는다.
// 참이면 왼쪽 거짓이면 오른쪽식을 시행한다.

let b = [];
if(b.length === 0) { // 배열이 0이 되는 경우 빈배열을 뜻함
    console.log("빈 배열");
} else {
console.log("안 빈 배열")
}

// 삼항연산자
let c = [1,23];

c.length === 0? console.log("빈 배열") : console.log("안 빈 배열");


// 값을 작성

let d = [];

const arrayStatus = a.length === 0? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);



let j;

const result = a ? true : false;
console.log(result); // j에 아무것도 할당하지 않았을 경우 false, 배열과 같이 어떤 값을 할당 했을 경우 true


// 삼항 연산자 중첩 // 학점 계산 프로그램
//90점 이상 A+
//50점 이상 B+
//둘다 아니면 F

let score = 100; // 중첩되는 경우 삼항연산자보다 중첩되는 if문이 나을수 있다.

score >= 90
? console.log("A+") 
: score >= 50
? console.log("B+")
:console.log("F");


if(score >= 90) {
    console.log("A+");
} else if (score >= 70) {
    console.log("B+");
} else {
    console.log("F");
}