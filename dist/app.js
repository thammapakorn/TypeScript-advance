"use strict";
// function void
// function test(){
//    return console.log("Hello TS")
// }
// test()
// function (parameter)
// function sendEmail(name:string ="test@gmail.com"){
//     console.log(name)
// }
// sendEmail()
// function return
// function getAddress():string{
//     return "Bangkok";
// }
// console.log(getAddress());
// function รับและ return
function checkNumber(num) {
    if (num % 2 === 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
}
function total(a, b) {
    return a + b;
}
console.log(total(100, 200));
console.log(checkNumber(11));
