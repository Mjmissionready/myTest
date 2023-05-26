// Access the elements
document.addEventListener("DOMContentLoaded", function () {
    const headingElement = document.getElementById("heading");
    const toggleBtn = document.getElementById("toggleBtn");

    // Add event listener to the button
    toggleBtn.addEventListener("click", function () {
        // Toggle the text color between red and black
        if (headingElement.style.color === "red") {
            headingElement.style.color = "black";
        } else {
            headingElement.style.color = "red";
        }
    });
});


// document.addEventListener("DOMContentLoaded", function () {
//     // Accessing elements
//     const titleElement = document.getElementById("title");
//     console.log(titleElement.textContent); // Output: Hello, DOM!

//     const contentElements = document.getElementsByClassName("content");
//     console.log(contentElements.length); // Output: 1
//     console.log(contentElements[0].textContent); // Output: This is a paragraph.

//     const listElement = document.querySelector("#list");
//     const listItems = listElement.getElementsByTagName("li");
//     console.log(listItems.length); // Output: 3
//     console.log(listItems[1].textContent); // Output: Item 2

//     const buttonElement = document.querySelector("#btn");

// });



