// ADD NEW ITEM TO END OF LIST
var myList = document.getElementsByTagName('ul')[0];
var newLI = document.createElement("LI");
var newText = document.createTextNode("cream");
newLI.appendChild(newText);
myList.appendChild(newLI);

// ADD NEW ITEM START OF LIST
newLI = document.createElement("LI");
newText = document.createTextNode("kale");
newLI.appendChild(newText);
myList.insertBefore(newLI, myList.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var myLIs = document.getElementsByTagName("li");
for (var i = 0; i < 6; i++) {
  myLIs[i].setAttribute("class", "cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var numItems = myLIs.length;
document.getElementsByTagName("h2")[0].innerHTML = "Buy groceries [" + numItems + "]";
