// async

function hello() {
    return "hello";
}

function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

async function helloAsync() {
    return delay(3000).then(() => {
        return "hello Async"
    });
}

helloAsync().then((res) => {
    console.log(res);
});

console.log(hello());
console.log(helloAsync());
// await 비동기 함수가 끝날때까지 끝나지 않는다.

