var display  = document.getElementById('display')

function inputval(num){
    display.value += num;
}
function calVal(){
    var ans = eval(display.value);
    display.value = ans;
}
function clearAll(){
    display.value = "";
}