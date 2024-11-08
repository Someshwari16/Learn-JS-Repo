function return_a_number(n){
  n = n+ "";
  return n.split("").reverse("").join("");
}
console.log(number(return_a_number(3456)));