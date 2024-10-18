// School Counter
document.getElementById("count-el").innerText = 0;
var count = 0;
var str = "";
function increment() {
   count++;
   console.log(count);
   document.getElementById("count-el").innerText = count;
   console.log(document.getElementById("count-el"));
}
function save() {
   str = document.getElementById("previous").innerText;
   str += " " + count + " - ";
   document.getElementById("previous").innerHTML = str;
}
