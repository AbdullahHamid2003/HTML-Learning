// // var student = {
// //     name:"Abdullah", 
// //     course:"Web & App Development", 
// //     age:19,
// //     isApproved: true,
// //     hobbies: ["cricket", "Football", "Badminton"],
// //     address: {
// //         street: "ABC Street",
// //         city: "Karachi",
// //         country: "Pakistan",
// //     },
// // };
// // console.log(student.address.country);
// // console.log(student.hobbies[2]);

// var student1 = {
//     name:"Abdullah", 
//     F_Name: "Hamid", 
//     age:19,
//     Roll_No: 255,
// };
// var student2 = {
//     name:"Hamid", 
//     F_Name: "Ilyas", 
//     age:19,
//     Roll_No: 264,
// };
// var student3 = {
//     name:"Sameer", 
//     F_Name: "Sajid", 
//     age:19,
//     Roll_No: 239,
// };
// var student4 = {
//     name:"Umair", 
//     F_Name: "Yahya", 
//     age:19,
//     Roll_No: 241,
// };
// var student5 = {
//     name:"Hamza", 
//     F_Name: "Naseem", 
//     age:19,
//     Roll_No: 117,
// };
// var student6 = {
//     name:"Usman", 
//     F_Name: "Irshad", 
//     age:19,
//     Roll_No: 310,
// };
// var student7 = {
//     name:"Noman", 
//     F_Name: "Siddique", 
//     age:19,
//     Roll_No: 240,
// };
// var student8 = {
//     name:"Ali", 
//     F_Name: "Sheikh", 
//     age:19,
//     Roll_No: 259,
// };
// var student9 = {
//     name:"Arsalan", 
//     F_Name: "Ahmed", 
//     age:19,
//     Roll_No: 112,
// };
// var student10 = {
//     name:"Hassan", 
//     F_Name: "Irfan", 
//     age:19,
//     Roll_No: 401,
// };

// var a = [student1,student2,student3,student4,student5,student6,student7,student8,student9,student10];

// var b = prompt("Find Student by Roll No");

// for(var i=0; i<a.length; i++){
//     if(a[i].Roll_No == b)
//     {
//         console.log("Roll Number Found at Index:" + i);
//         console.log(a[i])
//     }
//     else
//     {
//         // alert("Sorry Your Input is Invalid");
//     }
// }

var students = [
    {
        name: "Sameer",
        Roll_No: 239,
        inst: "Web and app dev"
    },
    {
        name: "Abdullah",
        Roll_No: 264,
        inst: "Web and app dev"
    },
    {
        name: "umair",
        Roll_No: 241,
        inst: "Web and app dev"
    },
    {
        name: "noman",
        Roll_No: 240,
        inst: "Web and app dev"
    },
    {
        name: "usman",
        Roll_No: 310,
        inst: "Web and app dev"
    },
];


var tbody = document.getElementById("tbody");

for (var i = 0; i < students.length; i++)
{
    tbody.innerHTML += `<tr>
    <td>${students[i].name}</td>
    <td>${students[i].Roll_No}</td>
    <td>${students[i].inst}</td>
</tr>`
}