// 경로와 require와 module export라는 내장 함수를 통해 다른 파일의 계산 기능 등을 불러와 사용할수 있다.

const calc = require("./calc")

console.log(calc.add(1,2));
console.log(calc.add(4,5));
console.log(calc.add(4,5));