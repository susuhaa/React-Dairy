// 프로그래밍을 할때 똑같은 코드들이 여기저기에 존재하게된다.
// 중복된 동일한 코드들을 묶어서 함수라는 코드로 만들어 필요할때마다 호출하여 사용한다.

let width1 = 10;
let height1 = 20;

let area1 = width1 * height1;
console.log(area1);

let width2 = 30;
let height2 = 15;

let area2 = width2 * height2;
console.log(area2);

// 함수 만들기

function getArea(){
    let width = 10;
    let height = 20;

    let area = width * height;
    console.log(area);
} // 함수 선언식, 함수 선언 방식의 함수 생성

//함수를 호출하는 방법

getArea();
console.log("함수 실행 완료");

function getArea1(width1, height1){
      area1 = width1*height1;
        return area1;
}

let area3 = getArea1(100,200); //리턴받는 값을 반환한다/ 함수에서 실행하고 받은 값을 돌려받는다. // 20000
console.log(area3);
console.log("함수 실행 완료");

