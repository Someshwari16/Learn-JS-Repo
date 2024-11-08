// javascript object method 


const person ={
    firstname: "elon",
    lastname:"musk",
}

function greet(){
    console.log("Hello world");
}
person.greeting = greet;

console.log(person);


// this keyword 

const person = {
    firstname:"ramu",
    lastname:"ragavan",
    greet: function(){
        console.log("hello" + this.firstname);
    }
}
person.greet();

