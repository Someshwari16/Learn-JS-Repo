var coffee = 10,
    vada = 5,
    Tea = 10
    biscuit = 4
var coffee_q = 0,
    vada_q = 0,
    Tea_q = 0;
    biscuit_q= 0;
var name = "",
    mobile="";
var coffeeBill = "",
    vadaBill = "",
    TeaBill = "",
    biscuitBill = ""
var total_amount = 0;
document.getElementById("name").addEventListener("keyup", function() {
    document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("mobile").addEventListener("keyup", function() {
    document.getElementById("mobile2").innerHTML = this.value;
});

document.getElementById("coffee").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        coffeeBill = "";
        coffee_q = 0;
        showBill();
    } else {
        coffee_q = this.value;
        coffeeBill = "<tr><td>coffee</td><td>Rs. " + coffee + "</td><td>" + coffee_q + "</td><td>" + coffee+ "x" + coffee_q + " = " + coffee * coffee_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("vada").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        vadaBill = "";
        vada_q = 0;
        showBill();
    } else {
        vada_q = this.value;
        vadaBill = "<tr><td>vada</td><td>Rs. " + vada + "</td><td>" + vada_q + "</td><td>" + vada+ "x" + vada_q + " = " + vada * vada_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("Tea").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        TeaBill = "";
        Tea_q = 0;
        showBill();
    } else {
        Tea_q = this.value;
        TeaBill = "<tr><td>Tea</td><td>Rs. " + Tea + "</td><td>" + Tea_q + "</td><td>" + Tea + "x" + Tea_q + " = " + Tea* Tea_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("biscuit").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        biscuitBill= "";
        biscuit_q = 0;
        showBill();
    } else {
        biscuit_q= this.value;
        biscuitBill = "<tr><td>biscuit</td><td>Rs. " + biscuit + "</td><td>" + biscuit_q + "</td><td>" + biscuit + "x" + biscuit_q + " = " + biscuit* biscuit_q + "</td></tr>";
        showBill();
    }
});



function showBill() {
    document.getElementById("bill").innerHTML = coffeeBill + vadaBill + TeaBill +biscuitBill;
    document.getElementById("amount").innerHTML = coffee* coffee_q +vada * vada_q + Tea * Tea_q + biscuit*biscuit_q;
}