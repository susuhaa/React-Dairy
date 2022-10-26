const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// 모듈 내보내기
// 객체단위로 계산 모듈을 내보냄
module.exports = {
    moduleName: "calc module",
    add: add,
    sub: sub,
}
