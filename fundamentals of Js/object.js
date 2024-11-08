// objects in javascript 

const person ={
    firtname: "ramu",
    lastname:"rajan",
    age: 32,
}

for (let prop in person){
    console.log(prop + ":" + person[prop]);
}
