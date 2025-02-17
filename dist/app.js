"use strict";
// function void
// function test(){
//    return console.log("Hello TS")
// }
// test()
function total(a, b, c) {
    if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
        return a + b + c;
    }
    if (typeof a == "string" && typeof b == "string" && typeof c == "string") {
        return parseInt(a) + parseInt(b) + parseInt(c);
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
console.log(total(100, 100, 100));
console.log(total("200", "100", "100"));
