

// object initialisation-------------

// let obj = {
//     sam : 1,
//     suraj : 2,
//     print : function(User){
//         console.log('hello , welcome you are genius ' + User)
//     }
// }
// console.log(obj.print('suraj'))
// console.log(obj.sam);



// object destructring------------------

// let {sam : name1,suraj : name2} = obj;
// console.log(name1,name2);


// factory method for creating object--------------

function person(year){
    return {
        name : "suraj",
        age : "18",
        course : "bca",
        year
    }
}

let person1 = person('1st');
let person2 = person('2nd');
person2.name = 'sam';
person2.course = 'bsc';
console.log(person1);
console.log(person2);


// class method of creating object--------------

// class vehicle{
//     constructor(name,wheels){
//         this.name = name,
//         this.wheels = wheels
//     }

//     start(){
//         console.log(`${this.name} is starting`);
//     }
// }

// let car1 = new vehicle('honda',4);
// let car2 = new vehicle('nano',3);
// console.log(car1);
// console.log(car2);
// car1.start()
// car2.start()