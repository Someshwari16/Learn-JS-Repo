// Array.from() method
const newArr = Array.from("GeekdforGeeks");
console.log("Implementing Array.from(): ", newArr)

// Array.keys() method
const milkProducts = ["Curd", "Cheese", "Butter", "Ice-Cream"];
const arrayKeys = milkProducts.keys();
console.log("Implementing Array.keys(): ")
for(let key of arrayKeys){
    console.log(key)
}

// Array.find() method
const findArray = ["clock", "strong", "planet", "earth"];
const lessThanSix = (item) => {
    return item.trim.length < 6;
}
console.log("Implementing Array.find(): ", 
findArray.find(lessThanSix));
console.log("Implementing Array.findIndex(): ", 
findArray.findIndex(lessThanSix));