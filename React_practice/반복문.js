// 조건과 반복에 의해 완성된다.
// 배열의 원소를 한번에 접근 가능하다.

const arr = ["a", "b", "c"];

// console.log("soo");
// 초기식, 반복에 주체가 되는 변수를 선언
// 조건식, 조건을 명시해두는것
// 연산식, 조건을 만족하는 경우 

// let i = 0 for을 적고 소괄호 안에 let이라는 변수에 값을 할당한다.
for (let i = 0; i < arr.length; i++) {
    //반복 수행할 명령
 console.log(arr[i]);

}
//for문은 배열을 순회할때 유용하다.

//객체 순회하는 방법
let person = {
    name: "soo",
    age: 25,
    tall: 175
};

const personKeys = Object.keys(person);
for(let i=0; i< personKeys.length; i++){
    console.log(personKeys[i]);
    // 키 값

    const curKey = personKeys[i]; // 키 값
    const curValue = person[curKey];// 키값을 통해서 value값을 찾음

    console.log (`${curKey} : ${curValue};`) 

    const personValues = Object.values(person); // object의 values를 이용하면 value값을 받아올수 있다.
     for(let i = 0; i< personValues.length; i++) {
        console.log(personValues[i]);
     }


}

