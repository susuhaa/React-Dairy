let a = 10;

if(a >= 7){
    console.log("7 이상입니다");
} else if (a >= 5){
    console.log("5 이상입니다");
} else if (a >= 4){
    console.log("4 이상입니다");
} else {
    console.log("5 미만입니다");
}

// switch 조건문 ( else if의 사용이 너무 많을 경우 )

let country = "uk"

// switch의 country를 아래 case들과 비교 아래로 내려가면서 맞는 케이스를 수행
// break를 써야 필요한 타이밍에 끊을수 있다.

switch(country){
    case "ko":
        console.log("한국");
        break;
    case"ch":
        console.log("중국");
        break;
    case "jp":
        console.log("일본");
        break;
    case "uk":
        console.log("영국");
        break;
    default:
        console.log("미분류");
        break;
}



