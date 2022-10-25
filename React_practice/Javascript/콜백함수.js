function checkMood (mood, goodCallback, badCallback){
    if(mood === "good"){
//기분 좋을 때 하는 동작
        goodCallback();
    }else{
        badCallback();
    }
}

function cry() {
    console.log("ACTION :: CRY");
}
function sing() {
    console.log("Action :: SING");
}
function dance() {
    console.log("Action :: DANCE");
}

checkMood("sad", sing, cry);