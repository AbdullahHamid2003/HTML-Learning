// var a = 10;
// var b = 20;
// var c = 30;

// if(a == b)
// {
//     console.log("A is equal to B");
// }
// else if (b < c){
//     console.log("B is less than C");
// }

// var a = 10
// var b = 20
// var allowed = true;

// if (a == b){
//     if (allowed == true){
//         console.log("Allowed");
//     }
// }
// if (a == b && allowed == true){
//     console.log("Allowed");
// }
// if (a == b || allowed ==  true){
//     console.log("Allowed");
// }

var math = +prompt("Enter Math Marks:");
var physics = +prompt("Enter physics Marks:");
var chemistry = +prompt("Enter chemistry Marks:");
var science = +prompt("Enter science Marks:");
var urdu = +prompt("Enter urdu Marks:");

var total = math + physics + chemistry + science + urdu;

var perc = (total / 500 ) * 100;

console.log("Your Percentage is "+perc+"%");

if (perc >= 80 && perc <= 100){
    console.log("Congrats! You Passed with Grade A+");
}
else if (perc >= 70 && perc <= 80){
    console.log("Congrats! You Passed with Grade A");
}
else if (perc >= 60 && perc <= 70){
    console.log("Congrats! You Passed with Grade B");
}
else if (perc >= 50 && perc <= 60){
    console.log("You Passed with Grade C");
}
else if (perc >= 40 && perc <= 50){
    console.log("You Passed with Grade A+");
}
else{
    console.log("Alas! You are Failed");
}