// //Event Bubbling & Capturing 

// // Bubbling: Event triggers from innermost to outermost element

// // Capturing: Event triggers from outermost to innermost element

// // Default event bubbling behavior is enabled in HTML. To stop event bubbling, we can use event.stopPropagation() method

// // Example:

// var div = document.querySelector("div");

// div.addEventListener("click", function() {
//   console.log("Hello World!");
//   event.stopPropagation();
// });

// var p = document.querySelector("p");

// p.addEventListener("click", function() {
//   console.log("This is a paragraph!");
// });

// // Capturing:

// var div = document.querySelector("div");

// div.addEventListener("click", function() {
//   console.log("Hello World!");
// }, true);

// var p = document.querySelector("p");

// p.addEventListener("click", function() {
//   console.log("This is a paragraph!");
// }, true);

// // In the above example, when a click event is triggered on the div element, both console.log statements will be executed. However, if we use event capturing, only the console.log statement from the div element will be executed. This is because event capturing triggers the event from outermost to innermost element.

// // Event Delegation:

// // Instead of attaching event listeners to individual elements, we can attach them to a parent element and use event delegation to handle events for its child elements. This improves performance and reduces memory usage.


// // Example:

// var div = document.querySelector("div");

// div.addEventListener("click", function(event) {
//   if (event.target.tagName === "P") {
//     console.log("This is a paragraph!");
//   }
// });

// // In the above example, when a click event is triggered on the div element, it checks if the clicked element is a paragraph. If it is, it logs a message. This is more efficient than attaching event listeners to individual paragraph elements.

// // Event Delegation with event capturing:

// var div = document.querySelector("div");

// div.addEventListener("click", function(event) {
//   if (event.target.tagName === "P") {
//     console.log("This is a paragraph!");
//   }
// }, true);

// // In the above example, when a click event is triggered on the div element, it checks if the clicked element is a paragraph. If it is, it logs a message. This is more efficient than attaching event listeners to individual paragraph elements, and it also uses event capturing.

// // Event Listeners:

// // Event listeners are functions that are called when a specific event occurs on an element. They can be attached to multiple elements using addEventListener() method.

// // Example:


// var button = document.querySelector("button");

// button.addEventListener("click", function() {
//   console.log("Button clicked!");
// });

// // In the above example, when the button element is clicked, the console.log statement will be executed.

// // Event listener with event capturing:

// var button = document.querySelector("button");

// button.addEventListener("click", function() {
//   console.log("Button clicked!");
// }, true);

// // In the above example, when the button element is clicked, the console.log statement will be executed. This is because event capturing triggers the event from outermost to innermost element.

// // Event Object:

// // The event object contains information about the event, such as the element that triggered the event, the mouse position, and the keyboard key pressed. It is passed as an argument to the event listener function.

// // Example:

// var button = document.querySelector("button");

// button.addEventListener("click", function(event) {
//   console.log("Mouse position: X = " + event.clientX + ", Y = " + event.clientY);
// });

// // In the above example, when the button element is clicked, the console.log statement will be executed, displaying the mouse position relative to the viewport.

// // Event Object with event capturing:

// var button = document.querySelector("button");

// button.addEventListener("click", function(event) {
//   console.log("Mouse position: X = " + event.clientX + ", Y = " + event.clientY);
// }, true);


// // Event Types:

// // There are several event types available in JavaScript, such as "click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "keydown", "keyup", "keypress", "submit", "input", "change", "focus", "blur", "resize", "scroll", "load", "unload", "error", "contextmenu", and more.

// // Event Types with event capturing:

// var button = document.querySelector("button");

// button.addEventListener("click", function(event) {
//   console.log("Button clicked!");
// }, true);

// // Event Types with event bubbling:

// var div = document.querySelector("div");

// div.addEventListener("click", function() {
//   console.log("Hello World!");
//   event.stopPropagation();
// });

// // Event Types with event delegation:

// var div = document.querySelector("div");

// div.addEventListener("click", function(event) {
//   if (event.target.tagName === "P") {
//     console.log("This is a paragraph!");
//   }
// });

// // Event Types with event delegation with event capturing:

// var div = document.querySelector("div");

// div.addEventListener("click", function(event) {
//   if (event.target.tagName === "P") {
//     console.log("This is a paragraph!");
//   }
// }, true);

// // Event Types with event listeners:

// var button = document.querySelector("button");

// button.addEventListener("click", function() {
//   console.log("Button clicked!");
// });

// // Event Types with event listeners with event capturing:

// var button = document.querySelector("button");

// button.addEventListener("click", function() {
//   console.log("Button clicked!");
// }, true);

// // Event Types with event listeners with event delegation:

// var div = document.querySelector("div");

// div.addEventListener("click", function(event) {
//   if (event.target.tagName === "P") {
//     console.log("This is a paragraph!");
//   }
// });

// // Event Types with event listeners with event delegation with event capturing:

// var div = document.querySelector("div");

// div.addEventListener("click", function(event) {
//   if (event.target.tagName === "P") {
//     console.log("This is a paragraph!");
//   }
// }, true);




















var div = document.querySelector("div");
var a = document.querySelector("a");

// this is event bubbling ✅ 
// Bubbling: Event triggers from innermost to outermost element

// div.addEventListener("click", function() {

//   console.log("Parent is bubbling event"); //this will not be excuted when 
//   // I take stopImmediatePropagation on button events
// });

///

//  // Capturing: Event triggers from outermost to innermost element

// button.addEventListener("click", function(event) {
//    console.log("button 1 ");
//    event.stopImmediatePropagation(); // this will be executed
// });

a.addEventListener("click", function(event) {
    event.preventDefault();
    console.log("button 2 is propagating event");// this will  not be executed
})
// button.addEventListener("click", function(event) {
//     console.log("button 3"); // this will not be  executed
// })
// button.addEventListener("click", function(event) {console.log("button 4");})