// var a = [1,2,3,4,5,6,7,8,9];
// b.push(10);
// b.pop();
// console.log(a);

// var b = [1,2,3,4,5,6,7,8,9];
// b.unshift(0);
// b.shift();
// console.log(b);

// var b = ["a","b","c","d","e","f","g","h","i","j"];
// var c = b.slice(3, 7);  //will copy the elements from index 3 to index 6
// console.log(c);

// var b = ["a","b","c","d","e","f","g","h","i","j"];
// var c = b.slice(4, b.length);   //will copy the elements form index 4 to the end of the array
// console.log(c);

// var b = ["a","b","c","d","e","f","g","h","i","j"];
// var c = b.slice(2);   //will copy the elements  from index 2 to the end of the array
// console.log(c);

// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// b.splice(3, 3);   //will delete the elements form index and deletes to the count 3 from index 3
// console.log(b);

// var b = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// b.splice(3, 3, "Abdullah");   //will delete the elements form index 3 and deletes to the count 3 from index 3 and will replace the values with what i have given next to the count
// console.log(b);

//============= FOR LOOP =============

// for (var i = 0; i < 10 ; i++)
// {
//     console.log("Abdullah")
// }

// var arr = ["a","b","c","d","e","f","g","h","i","j"]
// for (var i = 0; i < 10 ; i++)
// {
//     console.log(arr[i]);
// }

// var arr = ["Karachi", "Islamabad", "Lahore", "Multan", "Faisalabad" , "Peshawar" ,"Quetta"];
// var search = prompt("Enter City Name:");
// var flag = false;
// for (var i = 0 ; i <= arr.length ; i++)
// {
//     if (arr[i] == search )
//     {
//         flag = true;
//         break;    
//     }
// }
// console.log(flag);

var a = ["a","b","c","d","e"];
var b = [1 , 2 , 3 , 4 , 5 ];

for (var i = 0 ; i <= a.length ; i++)
{
    console.log(a[i]);
    for(var j = 0 ; j <= b.length ; i++)
    {
        console.log(b[j]);
    }
}