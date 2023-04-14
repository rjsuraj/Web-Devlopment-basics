

// let a = "234";

// console.log(Number(a) + 6);


// objects

// const obj = {
//     "sam" : "true",
//     "suraj" : "44",
//     "no" : [1,2,3,4]
// }

// obj["no"][2] = "suraj"

// console.log(obj["no"][2])
// console.log(obj)


// functions
// function sum(a,b){
//     return a+b
// }

// const area = (l,b)=>{
//     return l*b;
// }

// console.log(sum(2,3),area(2,3))


// const arr = [2,30,20,22,21,60];

// const a = arr.filter((ele)=>{
//     return (ele%10)== 0;
// })

// console.log(a);

// const a2 = arr.map((ele)=>{
//     return ele*ele;
// })

// console.log(a2);    

// const arr = [1,2,3,4,5]

// const fact = (a,b)=>{
//     return a*b;
// }

// const a = arr.reduce(fact)

// console.log(a)


// arguments is array like objects
// function sum(){
//     console.log(typeof arguments)
//     console.log(arguments)
//     let total = 0;
//     for(let ele of arguments){
//         total += ele;
//     }
//     return total;
// }

// console.log(sum(1,2,3,4))

// making our own array like methods

// const myArrayLikeObject = {
//     0: 'apple',
//     1: 'banana',
//     2: 'cherry',
//     length: 3,
//     [Symbol.iterator]: function () {
//         let index = 0;
//         return {
//             next: () => {
//                 if (index < this.length) {
//                     return { value: this[index++], done: false };
//                 } else {
//                     return { value: undefined, done: true };
//                 }
//             }
//         }
//     }
// };

// for (let element of myArrayLikeObject) {
//     console.log(element);
// }

// chainning

let arr = [2,3,-1,6,-5];

let newArr = arr.filter((value)=>{
                return value >= 0;
            }).map((value)=>{
                return value*value;
            }).reduce((v1,v2)=>{
                return v1+v2
            })

console.log(newArr);