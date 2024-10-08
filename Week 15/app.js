// var a = "KARACHI"
// a = a.toLowerCase();
// console.log(a);

// var a = "lahore"
// a = a.toUpperCase();
// console.log(a);

// var a = "kaRaChI";
// var firstLetter = a.slice(0,1);
// firstLetter=firstLetter.toUpperCase();
// var otherLetters = a.slice(1);
// otherLetters=otherLetters.toLowerCase();

// var final = firstLetter + otherLetters
// console.log(final);

var cities = ['karachi','lahore','islamabad','multan'];
var cityName = prompt('Enter City Name');

// FIRST METHOD

// var count = 0;
// for (var i = 0 ; i <= cities.length ; i++)
// {
//     if (cityName == cities[i])
//     {
//         count = 1;
//         break;
//     }
// }
// if (count == 1)
// {
//     console.log("Found");
// }
// else
// {
//     console.log("Not Found");
// }

//SECOND METHOD

// var i = cities.indexOf(cityName);
// console.log(i);
// if (i > -1)
// {
//     console.log("Found");
// }

// var a = "karachi";
// var i = a.indexOf("i");
// console.log(i);

// var char = a.charAt(4);
// console.log(char);