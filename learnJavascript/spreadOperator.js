let arr1 = [1,2,3];
let arr2 = [5,6,6];

let newArr = [...arr1,...arr2];
console.log(newArr);

const person = {
    name : "sam",
    class : "1st year"
}

const personInfo = {
    ...person,
    age : "12",
    course : "bca"
}

console.log(personInfo)
