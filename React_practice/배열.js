// 배열은 비원시 자료에 해당하는 자료형이다. 순서있는 요소들의 집합이자 리스트이다. 동시에 여러가지 데이터를 가질수 있다.

// let arr = new Array(); // 생성자를 사용해 만든다.
let arrs = [1,"2",true, null, undefined,{}, [], function() {}]; // 배열 리터럴 ** // 배열은 모든 타입의 자료형을 넣을수 있다

let arr = [1,2,3,4,5]; // 배열 리터럴

console.log(arr);

//배열의 요소 각각에 접근 // 데이터가 위치한 순서, 인덱스를 통해 각각의 값에 접근한다.
// 0분터 시작하는 순서로 배열에 접근

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr.push({key:"value"}); // push를 사용하여 배열의 마지막에 값을 추가한다. 자료형이 어떤것이 되어도 상관 없다.
console.log(arr);

//배열의 길이를 변수로 받아오는 방법
console.log(arr.length); // 유용한 프로퍼티를 스스로 저장해두었기 때문에 불러올수 있고, 자동으로 갱신된다. 객체와 함께 가장 많이 사용된다 *****







