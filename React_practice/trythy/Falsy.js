let a = ""; // {},[], num, string, infinity, null, undefined, NAN 모두 true로 인식한다.

if (a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}


//함수 객체를 매체에서 받아서 이를 반환한다.

const getName = (person) => {
    if(person === undefined || person === null){
    return "객체가 아닙니다";
} 
return person.name;

};

let person = null;
const name = getName(person);

console.log(name);




const getNames = (person) => {
    if (!person) {// false Not => True을 이용하여 예외 처리를 함
        return "객체가 아닙니다";
    } 
    return person.name;
}

let persons;
const names = getNames(person);
console.log(name);

//