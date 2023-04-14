
const makeCheese = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        const cheese = "cheese is ready";
        resolve(cheese)
    },2000);
})

makeCheese.then((value)=>{
    console.log(value)
    const makePizza = new Promise((resolve,reject)=>{

        setTimeout(()=>{
            const pizza = "pizza is ready";
            resolve(pizza)
        },2000)
    })
    return makePizza;
}).then((value)=>{
    console.log(value);
    const orderPizza = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("order pizza")
        },2000)
    })
})