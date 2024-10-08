// function abc(productprice)
// {
//     var discount = 200;
//     var a = productprice - discount;
//     console.log(a);
// }

// abc(2000);
// abc(1500);
// abc(1000);
// abc(800);

// ====================TASKS=======================
// task1
// function letterCount(count)
// {
//     console.log(count.length);
// }

// letterCount('Abdullah hamid');


// task 2
// function setYear(year)
// {
//     var date = new Date();
//     date.setFullYear(year);
//     console.log(date);    
// }
// setYear(2003);

// task 3
// function age(DOB)
// {
// var date = new Date();
// console.log("Current Time ===>", date.getTime());
// console.log("DOB Time ===>", DOB.getTime());
// var b = (date.getTime() - DOB.getTime());
// console.log("Difference Time ===>", b);
// var a = b;
// var c = a/(1000*60*60*24*365);
// c = c.toFixed(2);
// console.log(c);    
// }
// age(new Date('10-26-2003'));

// task 4
// function detectName (word)
// {
//     var arr = ['Zaid','haris','raza','abu bakar','asad'];
//     var count = 0;
//     for(var i = 0; i <= arr.length; i++)
//     {
//       if (word == arr[i])
//       {
//         count = 1;
//         break;
//       }
//     }   
//     if (count == 1)
//     {
//         console.log('True');
//     }
//     else
//     {
//        console.log('false');
//     }
// }
// detectName('abu bakar');

// task 5
// function repeat(word){
//     console.log(word.repeat(10));
// }
// repeat('abcde');

// task6
// function Reverse(arr)
// {
//     console.log(arr.reverse(arr))
// }
// var arr = ['a','b','c','d','e'];
// Reverse(arr);

function discount(price,discount)
{
    var a = price - discount;
    return a ;
}

var finalAmount = discount(1000, 200);
var finalAmount1 = discount(600, 100);

console.log(finalAmount);
console.log(finalAmount1);