
const arr = [1,2,3,4];

// 콜백 함수이다
arr.forEach(elm => console.log(elm));

arr.forEach(function (elm) {
    console.log(elm*2);
});



// for(let i =0; i<arr.length; i++) {
//     console.log(arr[i]);
// }


//내장함수

// const newArr = [];
// arr.forEach(function (elm) {
//     newArr.push(elm*2);
// });
// console.log(newArr);


const newArr = arr.map((elm)=> {
    return elm *2; // 배열의 모든 요소에 *2를 한다. 리턴된 값들만 반환한다.
}); // map 내장함수
console.log(newArr);

let number = 3;
arr.forEach((elm)=> {
    if(elm === number) {
        console.log(true);
    }
});// forEach 내장함수

let numbers = "3";
console.log(arr.includes(numbers));
console.log(arr.indexOf(number)); // 배열에서 몇번째에 위치하는지 알려준다.

//객체 배열에서 원하는 속성을 갖는, 컬러가 그린인 배열에 인덱스를 알려줘

const arrs = [
    {color: "red"},
    {color: "black"},
    {color: "blue"},
    {color: "green"}
];

console.log(arrs.findIndex((elm) => {
    return elm.color === "blue";
}) // findIndex는 같은 조건이 두가지일때 처음 만나는 조건을 먼저 반환한다.

);

const arr1 = [
    {num: 1, color: "red"},
    {num: 2, color: "black"},
    {num: 3, color: "blue"}
];

const arr2 = [
    {num:4, color: "green"},
    {num: 5, color: "blue"}
]

console.log(arr.slice(0,2)); // 배열 자르기
console.log(arr1.concat(arr2));


// 변수로 배열 선언

let chars = ["나", "다", "가"];

// chars.sort();// 원본배열의 순서를 정렬하는 배열 메서드
// console.log(chars);

let numb = [0,1,3,2,10,30,20];
const compare = (a,b) => {
    //1. 같다
    //2. 크다
    //2. 작다
    if (a>b) {
        //크다
        return 1;
    }

    if (a<b) {
        return -1;
        //작다
    }
    //같다
    return 0;
};
// 

numb.sort(); // sort 메서드에 전달할 비교함수 
console.log(numb);
// 비교 함수를 제작하여 비교하면 오름차순, 내림차순으로 배열할수 있다.


// join 메서드를 통해서 원하는 문자를 넣어 내장함수를 만들수 있다.

















