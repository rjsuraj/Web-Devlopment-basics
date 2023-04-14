const arr = [
    {
        name : 'sam',
        age : '12'
    },
    {
        name : 'suraj',
        age : '18'
    },
    {
        name : 'aman',
        age : '23'
    }
]

const newArr = arr.map((element)=>{
    if(element.age >= 18){
        element.isVoteEligible = true;
    }
    else{
        element.isVoteEligible = false;
    }

    return element;
})

console.log(newArr);