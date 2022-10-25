function isPositive(number, resolve, reject) {
    setTimeout(() => {
        if(typeof number === "number") {
           resolve(number >= 0? "양수" : "음수" );
        } else {
            reject("주어진 값이 숫자형 값이 아닙니다");
        }
    }, 2000);
}

function isPositiveP(number){ // promis를 리턴받는 다는것은 비동기 처리를 한다는것이다.
 const executor = (resolve, reject) => { // executor 함수 비동기 작업을 실질적으로 수행하는 함수다.
     setTimeout(() => { 
        if(typeof number === "number") {
            // 성공 -> resolve
            console.log(number);
           resolve(number >= 0? "양수" : "음수" );
        } else {
            reject("주어진 값이 숫자형 값이 아닙니다");
        }

     }, 2000);
 };

 const asyncTask = new Promise(executor);
 return asyncTask;

} 
const res = isPositiveP(101);
res
.then((res) => {
    console.log("작업성공: ", res);
})
.catch((err) => {
    console.log("작업실패: ", err);
});





// isPositive(
//     -4,
//     (res) => {
//         console.log("성공적으로 수행됨 : ", res);
//     },
//     (err) => {
//         console.log("실패 하였음 : ", err);
//     }
// );