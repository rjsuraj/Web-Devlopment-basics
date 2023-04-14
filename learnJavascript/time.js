
// setTimeout-------------------

// function greet(name){
//     console.log('hello'+name);
// }

// console.log('before greet');

// setTimeout(greet,2000,'suraj');

// setTimeout(()=>{
//     greet(' sam')
//     console.log('printing after 2 second');
// },2000);

// console.log('after greet');

// setInterval -------------------------

let intervalId = setInterval(increaseCount,1000);

let count = 0;
function increaseCount(){
    count++;
    console.log(count);
    if(count == 5)
        clearInterval(intervalId);
}

