// 논리 연산자, && || !
// 단락회로 평가 왼쪽에서 오른쪽으로 연산하게되는 논리 연산자의 순서를 이용하는것

//truthy나 falsy를 이용한다

// const getName = (person) => {
//     if (!person) {
//         return "객체가 아닙니다";
//     }
//     return person.name;
// }

// let person;
// const name = getName(person);
// console.log(name);


const getName = (person) => {
    return person && person.name; 
};

let person = null;
const name = getName(person);
console.log(name);



