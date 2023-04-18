/*
Author: Justin Brown
Assignment "DOM Manipulation Exercises" for UMass/Springboard Bootcamp
Given the following HTML, write the code necessary to do the following:
*/

// Select the section with an id of container without using querySelector.
let container = document.getElementById("container");

// Select the section with an id of container using querySelector.
let container2 = document.querySelector("section");
 
// Select all of the list items with a class of “second”.
let section = document.getElementsByClassName("second");

// Select a list item with a class of third, but only the list item inside of the ol tag.
let item = document.querySelector("ol").getElementsByClassName("third")[0];

// Give the section with an id of container the text “Hello!”.
let newText = document.createElement("div");
newText.textContent = "Hello!";
container.prepend(newText);
 
// Add the class main to the div with a class of footer.
let div = document.getElementsByClassName("footer")[0];
div.classList.add("main");

// Remove the class main on the div with a class of footer.
div.classList.remove("main");

// Create a new li element.
let newLi = document.createElement("li");

// Give the li the text “four”.
newLi.textContent = "four";

// Append the li to the ul element.
let ul = document.querySelector("ul")
ul.append(newLi);

// Loop over all of the lis inside the ol tag and give them a background color of “green”.
let ol = document.querySelector("ol").querySelectorAll("li");
for (let li of ol) {
    li.style.backgroundColor = "green";
}

// Remove the div with a class of footer
div.parentElement.removeChild(div);