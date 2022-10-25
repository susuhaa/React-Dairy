//조건문을 업그레이드하여 사용하기

// 주어진 문자열이 한식인지 확인하는 문제

function isKoreanFood(food){
    if(food === "불고기"|| food === "비빔밥" || food === "떡볶이"){
        return true;
    }
    return false;
};

const food1 = isKoreanFood("불고기");
console.log(food1);



function isKoreanFoods(food){
    if (["불고기", "떡볶이", "비빔밥"].includes(food)) { // includes라는 메서드를 이용해서 위 세가지 음식중 하나를 선택하여 리턴한다.
        return true;
    }
    return false;
}

const food3 = isKoreanFoods("불고기");
console.log(food3)


// 값을 리턴하는 함수 // 객체의 프로퍼티에 접근하는 함수

const meal = { // 음식의 유형과 대표하는 메뉴
    한식 : "불고기",
    중식 : "멘보샤",
    일식 : "초밥",
    양식: "스테이크",
    인도식: "카레"
};

const getMeal = (mealType) => {
    return meal[mealType] || "굶기";
};


console.log(getMeal("중식"));
console.log(getMeal());