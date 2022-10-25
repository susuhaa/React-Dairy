const cookie = {
    base: "cookie",
    madeIn: "korea"
};

const chocochipCookie = {
    ...cookie,
    toping: "chocochip"
};

const blueberryCookie = {
    toping: "blueberry"
};

const strawberryCookie = {
    ...cookie,
    toping: "strawberry"
};

console.log(chocochipCookie);


//배열 사용

const noTopingCookies = ["촉촉한 쿠키", "안촉촉한 쿠키"];
const topingCookies = ["바나나쿠키", "블루베리 쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, "함정쿠키", ...topingCookies]; // 스프레드 연산자를 사용하면 들어가있는 값들을 펼칠수 있다. 또한 중간에 원하는 것을 추가할수 있다.

console.log(allCookies);


