// json in javascript

let jsonData = {
    name : "suraj",
    age : "18",
    class : "1st year"
}

let jsonString = JSON.stringify(jsonData);
console.log(jsonString)


let jsonObj = JSON.parse(jsonString);
console.log(jsonObj);