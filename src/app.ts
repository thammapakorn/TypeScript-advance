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
// function checkNumber(num:number):string{
//     if(num % 2 === 0){
//         return "เลขคู่"
//     }else{
//         return "เลขคี่"
//     }
// }

// function total(a:number,b:number){
//     return a+b
// }
// console.log(total(100,200))
// console.log(checkNumber(11))

// arrow function
// const total=(a:number,b:number):number=>{
//     return a+b;
// }
// console.log( `total = ${total(100,200)}`)

// default parameter
function showEmployee(name:string,age:number,address:string="กรุงเทพ"){
    console.log(`ชื่อ ${name}, อายุ ${age}, ที่อยู่ ${address}`)
}

showEmployee("ก้อง",30,"กรุงเทพ")
showEmployee("เปรม",28,"กรุงเทพ")
showEmployee("จูน",30)