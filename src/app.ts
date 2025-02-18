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
// function showEmployee(name:string,age:number,address:string="กรุงเทพ"){
//     console.log(`ชื่อ ${name}, อายุ ${age}, ที่อยู่ ${address}`)
// }

// showEmployee("ก้อง",30,"กรุงเทพ")
// showEmployee("เปรม",28,"กรุงเทพ")
// showEmployee("จูน",30)

// object ไม่กำหนดชนิดตัวแปร
// const person1={
//     name: "test",
//     age: 20
// }

// object กำหนดชนิดตัวแปร
// const person2:{name:string,age:number}={
//     name:"Pream",age:27
// }
// console.log(person2)

// const position:{x:number,y:number}={
//     x:200,
//     y:150
// }

// Function รับค่า object
// const person1 = {
//   name: "Pream",
//   age: 20,
// };
// const showDetail=(data: { name: string; age: number })=> {
//   console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`);
// }
// showDetail(person1);

// Function รีเทรินค่า object
// const position : {lat:number,long:number} = {lat:10,long:20}

// const randomPosition=():{lat:number,long:number}=>{
//     return{
//         lat:Math.random(),
//         long:Math.random()
//     }
// }
// console.log(randomPosition())

//Excess Properties Check
// const showDetail=(data:{name:string,age:number})=>{
//     console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`)
// }

// const person={
//     name:"pream",
//     age:27,
//     address:"Bangkok" //properties เยอะกว่าที่รับใน function showDetail
// }
// showDetail(person)

// showDetail({
//     name:"pream",
//     age:27,
//     address:"Bangkok"
// })

// type aliases
// type Employee = {
//     id:number,
//     name:string,
//     salary:number,
//     phone:string
// }
// let emp1:Employee ={
//     id:1,
//     name:"Pream",
//     salary:27000,
//     phone:"0633333333"
// }
// emp1.id = 4
// emp1.name = "June"
// emp1.salary = 60000
// emp1.phone = "0332221111"
// console.log(emp1)

// type aliases (optional)
// type Employee = {
//     id:number,
//     name:string,
//     salary:number,
//     phone?:string
// }
// let emp1:Employee ={
//     id:1,
//     name:"Pream",
//     salary:27000
// }
// let emp2:Employee ={
//     id:2,
//     name:"June",
//     salary:60000,
//     phone:"0565555555"
// }

// console.log(emp1)

// type aliases (read only)
// type Employee = {
//    readonly id:number,
//     name:string,
//     salary:number,
//     phone?:string
// }
// let emp1:Employee ={
//     id:1,
//     name:"Pream",
//     salary:27000
// }
// emp1.id = 599;
// emp1.salary = 100000

// console.log(emp1)

// Array กำหนดค่าเริ่มต้น เพิ่มค่าโดยใช้ push
// const ages:number[]=[25,30,35]
// ages.push(40)
// ages.push(50)
// console.log(ages)

// Array เข้าถึงสมาชิกใน Array โดยใช้ for loop
// const ages:number[]=[25,30,35]
// for(let i = 0; i < ages.length; i++){
//     console.log(ages[i])
// }
// // Array เข้าถึงสมาชิกใน Array โดยใช้ forEach
// ages.forEach(element=>{
//     console.log(`forEach ${element}`)
// })

// Array เข้าถึงสมาชิกใน Array เปลี่ยนค่าภายใน Array
// const ages:number[]=[25,30,35]
// ages[0] = 10
// console.log(`เปลี่ยนค่าจาก 25 เป็น ${ages[0]}`)

// Array ใช้กับ Type Aliases
// type Employee={
//     name:string,
//     salary:number,
//     department?:string
// }
// const employees:Employee[]=[]
// employees.push({name:"Pream",salary:30000,department:"IT Dev"})
// employees.push({name:"June",salary:60000,department:"Sales"})
// employees.push({name:"Joke",salary:60000})
// console.log(employees)

// console.log(employees[0])

// Function Overloading
// function sayHi():string
// function sayHi(name:string):string
// function sayHi(name?:unknown):unknown{
//     if(!name){
//         return `Hello TypeScript`
//     }
//     if(typeof name == "string"){
//         return `Hello ${name}`
//     }
//     throw new Error("ชนิดข้อมูลไม่ถูกต้อง")
// }

// console.log(sayHi())
// console.log(sayHi("Hello"))

// function total(a: number, b: number, c: number): number;
// function total(a: string, b: string, c: string): string;
// function total(a: unknown, b: unknown, c: unknown): unknown {
//   if (typeof a == "number" && typeof b == "number" && typeof c == "number") {
//     return a + b + c;
//   }
//   if (typeof a == "string" && typeof b == "string" && typeof c == "string") {
//     return parseInt(a) + parseInt(b) + parseInt(c);
//   }
//   throw new Error("ชนิดข้อมูลไม่ถูกต้อง")
// }
// console.log(total(100,100,100));
// console.log(total("200","100","100")); 

// Spread Operator
// const section:string[] = ["การเงิน","บัญชี"]
// const departments:string[] = ["โปรแกรมเมอร์","การตลาด","กราฟฟิก"]
// departments.push(...section) //... spread operator
// console.log(departments)

// Rest Parameter
// const total=(...numbers:number[])=>{
//   return numbers.reduce((result,value)=>{
//     return result+value;
//   },0) //result = 0 + กับค่าที่ส่งเข้ามา
// }

// console.log(total(100,200))
// console.log(total(100,200,300))
// console.log(total(100,200,300,400))

// Destructuring Array
const colors:string[]=["แดง","เขียว","น้ำเงิน"]
const [red,green,blue] = colors; //Destructuring
// const red:string = colors[0]
// const green:string = colors[1]
// const blue:string = colors[2]
console.log(red)
console.log(green)
console.log(blue)
// Destructuring Object
const person={
  fname:"pream",
  age:27,
  address:"Bangkok"
}
const{fname,age,address} = person
console.log(fname)
console.log(age)
console.log(address)
