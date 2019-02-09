var userInput = document.querySelector("#userInput");
var enterButton = document.querySelector("#enter");
var ul = document.querySelector("ul");

function createListElement(value, ul){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(value));
	ul.appendChild(li);
	userInput.value = "";
	// 1. BONUS: If you click on the new list item, it toggles the .done  class on and off.
	li.addEventListener("click", toggleDone);
	// ---------------------------------------------
	// 3. BONUS: When adding a new list item, it automatically adds the delete button next to it. 
	// ---------------------------------------------
	addButton(li);	// function declared at the end of script	
};

function addToList(){
	var value = userInput.value;
	if (value) {
		createListElement(value, ul);		
	}
};

// Add item to list on "button clicked" event
enterButton.addEventListener("click", addToList);

// Add item to list on "Enter key pressed" event
userInput.addEventListener("keypress", function(event){
	var value = userInput.value;
	if (event.keyCode == 13 && value) {
		createListElement(value, ul);
	}
});

// ---------------------------------------------
// 1. If you click on the list item, it toggles the .done  class on and off.
// ---------------------------------------------
// get list of "li" elements of first "ul" in the document
var listOfli = document.querySelector("ul").children;

// declare function that toggles "done" class of the this "ul" element
function toggleDone(){
	this.classList.toggle("done");
}

// loop through all "li"s in the list and add "clicked" event listener to each of them
for (var li of listOfli){
	li.addEventListener("click", toggleDone);
}

// ---------------------------------------------
// 2. Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// ---------------------------------------------
// declare function that deletes this element
function deleteItem(){
	ul.removeChild(this.parentElement);
}

// declare function that adds button to this element
function addButton(li){
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(button);
	button.addEventListener("click", deleteItem);
};

// loop through all "li"s in the list and add button to each of them
for (var li of listOfli){
	addButton(li);
}