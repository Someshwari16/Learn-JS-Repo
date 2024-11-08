//parameters and arguements

function greet(firstname, lastname){
    console.log("hello " + firstname +   ""  + lastname);
}
greet("batch", "1");


//default parameters

function sum(x, y=0){
    console.log(x+y);
}

sum(10)

//function return
function fn1(x){
 function fn2(y){
    return x*y;

 }
 return fn2;
}

let result = fn1(3);
console.log(result);
console.log(result(2));


//callback functions
function display(result){
    console.log(result);
}   
    
function add(num1, num2, mycallback){   
    let sum = num1 + num2;
    mycallback(sum);
}

add(10,20,display)

//Recursive functions 

function countDown(num){
    console.log(num);
    num--;
    if (num>=0){
       countDown(num);
    }
}

countDown(10);


