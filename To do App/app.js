var inpVal = document.getElementById("inp");
var list = document.getElementById("list");

function delRow(btn){
    console.log(btn.parentNode);  
    btn.parentNode.remove(); 
}

function editRow(btn){
    var a = prompt("Enter Edit");
    btn.parentNode.firstChild.nodeValue = a;
}

function deleteAll(){
    list.innerHTML = "";
}

function addTask(){
    var li = document.createElement("li");
    // li value
    var liVal = document.createTextNode(inpVal.value);
    // value of li
    li.appendChild(liVal);

    //creating delete button
    var del = document.createElement("BUTTON");
    var delText = document.createTextNode("Delete");
    del.appendChild(delText);
    del.setAttribute("class" , "btn");
    del.setAttribute("onclick","delRow(this)");
    li.appendChild(del);

    //create edit button
    var editbtn = document.createElement("BUTTON");
    var editText = document.createTextNode("Edit");
    editbtn.appendChild(editText);
    li.appendChild(editbtn);
    editbtn.setAttribute("class" , "btn");
    editbtn.setAttribute("onclick","editRow(this)");
    li.appendChild(editbtn);    

    // create list 
    list.appendChild(li);
    inpVal.value = "";
}




// var main = document.getElementById("main");
// var a = main.getElementsByTagName("P");

// for (var i = 0 ; i<a.length ; i++){
//     a[i].style.color = "red";
// }