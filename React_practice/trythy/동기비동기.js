function taskA() {
    console.log("A 작업 끝");

}

taskA();
console.log("코드끝")

// 자바스크립트에는 setTimeOut이라는 내장 비동기 함수가 있다. 
// setTimeOut(() => {},2000) // 콜백함수와 딜레이를 전달한다.

function taskB(a,b, cb) {
    setTimeout(() => {
        const res = a + b; // 지역 상수, 밖에서 사용하기 위해서 콜백 함수를 사용한다
        cb(res);
    }, 3000);
}

function taskC(a,cb){
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskD(a, cb){
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

taskB(3,4,(res) => {
    console.log("A TASK RESULT : ", res);
});

taskC(7,(res) => {
    console.log("B TASK RESULT : ", res)
});

taskD(14,(res) => {
    console.log('C TASK RESULT : ', res)
})

console.log("코드끝");

