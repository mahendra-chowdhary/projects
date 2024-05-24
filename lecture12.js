// //Asynchronous wait
// console.log("one");
// // function two() {
// //     console.log("two");
// // };
// // setTimeout(two, 5000);
// console.log("three");
// console.log("four");
// console.log("five");
// console.log("six");

// //callback

// function sum(a, b) {
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 3, sum);

// //callBack hell

// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// getData(1,() => {
//     getData(2);
// });


//promises

// function  getData(dataId, getNextData) {
//     return new promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("data=", dataId);
//             // resolve=("success");
//             reject("error");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

const getPromise = () => {
    return new promise((resolve, reject) => {
        console.log("i am a promise");
        resolve("success");
        reject("network error");
    });    
}

let promise = getPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

promise.catch((err) => {
    console.log("rejected", err);
});

