var item1;
var item2;
var item3;
document.getElementById("changeList").onclick = newList;
function newList() {
item1 = prompt("Enter a new first thing: ");
item2 = prompt("Enter a new second thing: ");
item3 = prompt("Enter a new third thing: ");
updateList();
}
function updateList() {
document.getElementById("first").innerHTML =
item1;
document.getElementById("second").innerHTML =
item2;
document.getElementById("third").innerHTML =
item3;
}