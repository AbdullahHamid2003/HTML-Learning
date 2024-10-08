// var content = document.getElementById("content");

// function closeFunc(){
//     // content.style.display = "none";

//     content.className += " border";
// }


// var main = document.getElementById("main");
    
// for (var i = 0 ; i < main.childNodes.length ; i++){
//     if(main.childNodes[i].id == 'pera'){
//         main.childNodes[i].style.color = 'red';
//     }
// }   

var pera = document.getElementById("pera");
console.log(pera.parentNode)
console.log(pera.childNodes)
console.log(pera.previousSibling)
console.log(pera.nextSibling)

var main = document.getElementById("main")
console.log(main.childNodes)
console.log(main.firstChild)
console.log(main.lastChild)
