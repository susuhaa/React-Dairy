// let arr = ["one", "two", "three"];


// let one = arr[0];
// let two = arr[1];
// let three = arr[2];



//비구조화 할당

// let [one,two,three] = arr; // 배열에 변수를 선언하고, arr이라는 변수에 넣어준다

//배열의 선언분리 비구조화 할당
// let [one, two, three] = ["one", "two", "three"];

// console.log(one, two, three);

// // 순서대로 배열의 요소를 할당

// //스왑이라는 요소에도 할당할수 있다.

// let a = 10;
// let b = 20;

// [a,b] = [b,a];
// console.log(a,b);

let object = { one: "one", two: "two", three: "three"};

let{ one, two, three } = object; // 키값을 기준으로 할당된다.*** 리액트에서 매우 많이 사용된다.

// let one = object.one;
// let two = object.two;
// let three = object.three;

console.log(one, two, three);

