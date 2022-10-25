let age = 25;

console.log(age);// 25

age = 30;

console.log(age);

// 변수 이름을 정시에 다른 기호를 사용해서는 안되지만 _(언더스코어)는 사용할수 있다
// 변수명을 숫자로 사용할수 없다.
// 예약어를 사용하면 안된다. (자바스크립트에 사용하는 키워드어)

var ages2 = 30;

const ages = 25;
// 상수는 선언할수 없다( 변형할수 없다)

//자바스크립트의 자료형

//primitive typeof(원시타입)
let number = 12; // 한번에 하나의 값 만 가질 수 있음/ 하나의 고정된 저장 공간 이용

// Non-Primitive Type(비원시 타입)
let array = [1,2,3,4];
// 한번에 여러개의 값을 가질 수 있음/ 여러개의 고정되지 않은 동적 공간 사용


let name = "winterload";
let name2 = "soosoo";
let name3 = `jin ${name2}`

console.log(name3)

// boolean
let isSwitchOff = false; // 참, 거짓

//null 아무값도 가지지 않는다.
let c = null;
console.log(c);

//undefine 아무런 값을 할당 받지 않을 경우 -> 아무것도 선언하지 않을 경우
let variable;
console.log(variable);

// 값은 유지하면서 자료형은 변환하는 형변환
let numberA = 12; // 숫자
let numberB = "2"; // 문자

console.log(numberA * numberB); // 24
// 문자형으로 선언했음에도 자동으로 숫자로 인식하여 암묵적으로 형변환을 해준다

console.log(numberA + numberB); // 이 경우 숫자와 문자의 결합으로 인식하여 122가 출력됨
console.log(numberA + parseInt(numberB));

//연산자 - 사칙연산
let a = 1; 
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


a = 10;
a += 10;
console.log(a);

// 후위연산
let d = 10;

console.log(d--); // 10
console.log(d); // 한 줄이 바뀌고 나서 +1이 된다.

//전위연산자
console.log(++d);
console.log(d);

//논리 연산자 - boolean 자료형

console.log(!true);
console.log(!false);
console.log(true && true);
console.log(true && false);
console.log(true || false); // true
console.log(false || false); // false

let compareA = 1 == "1"; // '==' 일때 값만 비교, '==='일때 값과 타입까지 비교 
console.log(compareA);

let compareB = 1 != "1"; // '!=' 같지 않다, '!==' 같지 않다, 값과 타입까지 비교
console.log(compareB); 

// ===, !== 타입까지 비교하는것이 훨씬 안전하다.

let compareC = 1 <= 1;
console.log(compareC);

// 자바스크립트는 숫자 타입을 넣었다가, 문자타입으로 바꿔도 문제가 생기지 않는다.
// -> 동적타입 언어, 유연하지만 에러가 발생할 확율이 높다.

let compareE = 1;
compareE = "1";

console.log(typeof compareE);
// typeof 연산자를 쓴 이후에 이름을 쓰면 'string'과 같은 타입을 돌려준다.


// null 병합 연산다.

let e;
//값이 없다면 10을 대입하고, 값이 있다면 그냥 그 값을 대입해라.
e = e?? 10; // 10 출력
console.log(e);

//??는 null병합 연산자로, ?? 양쪽으로 null이나 undefine과 같은 연산자를 선택한다.
//위 경우 e와 10을 비교하여, e가 undefine이기 때문에 10을 선택하여 10을 출력하게 된다.






















