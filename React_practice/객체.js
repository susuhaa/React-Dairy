// 객체는 두가지 방법으로 생성할수 있다.

let person = new Object(); // 객체 생성자 방식

let persons = {
    name:"soo", // 함수가 아닌 객체들은 멤버라고 부른다.
    age: 26,
    key: 123, // 프로퍼티( 객체 프로퍼티 )
    key1: "value",
    key2: true, // 다른 자료형을 넣어도 된다.
    key3: undefined,
    key4: [1,2],
    key5: function(){},
    say: function() {
        console.log(`안녕나는 ${persons["name"]}`); // 함수인 프로퍼티를 메서드라고 부른다. // this와 persons는 가르키는 값이 같다.
    }
}; // 객체 리터럴 방식 // 익숙해지는것이 좋다. // 가장 뒤에있는 프로퍼티를 중심으로 키를 찾기때문에 중복되는 키의 값은 무시된다 
//따라서 중복되는 키를 사용하지 않도록 주의해야한다.
console.log(person.gender);

console.log(persons.key1); // 점 표기법으로 프로퍼티 추가
console.log(persons.key2);

console.log(persons["name"]); // 괄호표기법을 사용할때는 key 이름을 반드시 "따옴표"안에 넣어서 사용해야한다.
console.log(persons.age);

function getPropertyValue (key){
    return persons[key];
}
 
//객체를 상수로 선언을 했더라도, 객체 안의 프로퍼티는 선언하고 수정할수 있다.

persons.location = "한국";
persons["gender"] = "남성";

persons.name="이경한 A";
persons["age"] = 40;

console.log(persons.age);

//프로퍼티 삭제
delete persons.age;
console.log(persons);

delete persons["name"];
console.log(persons);
// deleted의 기능으로 메모리와의 연결을 끊을수 없다.

persons.name = null;
console.log(persons);
persons.say();
persons["say"]();

console.log(`name : ${"name"} in person}`);
console.log(`age : ${"age" in person}`);
console.log(`gender: ${"gender" in person}`); // in을 통해서 프로퍼티의 존재여부를 boolean 타입으로 리턴 받을 수 있다.

