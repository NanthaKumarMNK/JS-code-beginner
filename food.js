let food = require('./food.json');
console.log(food)
let vegetable = food.filter((events)=> events.category==="Vegetable")
console.log(vegetable)
let Fruit = food.filter((events)=> events.category==="Fruit")
console.log(Fruit)
let Protein = food.filter((events)=> events.category==="Protein")
console.log(Protein)
let Nuts = food.filter((events)=> events.category==="Nuts")
console.log(Nuts)
let Grains = food.filter((events)=> events.category==="Grains")
console.log(Grains)
let Dairy = food.filter((events)=> events.category==="Dairy")
console.log(Dairy)
let claAbv100 = food.filter((events)=> events.calorie>100)
console.log(claAbv100)
let claBlw100 = food.filter((events)=> events.calorie<100)
console.log(claBlw100)
let proteinSort=food.sort((a,b)=>{
    if (a.protiens<b.protiens){
        return 1;
    }
    else if (a.protiens>b.protiens){
        return -1;
    }
    else{
        return 0;
    }
})
console.log(proteinSort)
    
let cabSort=food.sort((a,b)=>{
    if (a.cab>b.cab){
        return 1;
    }
    else if (a.cab<b.cab){
        return -1;
    }
    else{
        return 0;
    }
})
console.log(cabSort)
    