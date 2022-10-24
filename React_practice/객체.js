// 객체는 두가지 방법으로 생성할수 있다.

let person = new Object(); // 객체 생성자 방식

let persons = {
    name:"soo",
    age: 26,
    key: 123, // 프로퍼티( 객체 프로퍼티 )
    key1: "value",
    key2: true, // 다른 자료형을 넣어도 된다.
    key3: undefined,
    key4: [1,2],
    key5: function(){}
}; // 객체 리터럴 방식 // 익숙해지는것이 좋다. // 가장 뒤에있는 프로퍼티를 중심으로 키를 찾기때문에 중복되는 키의 값은 무시된다 
//따라서 중복되는 키를 사용하지 않도록 주의해야한다.

console.log(persons.key1); // 점 표기법
console.log(persons.key2);

console.log(persons["name"]); // 괄호표기법을 사용할때는 key 이름을 반드시 "따옴표"안에 넣어서 사용해야한다.
console.log(persons.age);

function getPropertyValue (key){
    return person[key];
}
 
