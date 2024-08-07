console.log("running");

// const banner = document.getElementById("page-banner");

// const titles = document.getElementsByClassName("title");

// console.log(Array.isArray(titles) );
// console.log(Array.isArray(Array.from(titles)));
// Array.from(titles.forEach(ul => ul)); // for each is not function
// Array.from(titles).forEach(ul => console.log(ul));
// for(let i=0; i<titles.length; i++) {

//     console.log(titles[i]);
// }

const bookLists = document.querySelector("#book-list li:nth-child(2) .name"); //this is 
// is vanilla queryselector
//var books = document.querySelector("#book-list li .name"); //this is

// books = document.querySelectorAll("#book-list li .name");
// console.log(books);

// Array.from(books).forEach(function (book) {
//     console.log(book.textContent += '(book title) ');
// });


const bookListTitle = document.querySelector("#book-list");

bookListTitle.innerHTML += "<a>Books and more books</a>";

//Nodes 

const banner = document.querySelector("#page-banner");

console.log('#page-banner of node type is:',banner.nodeType); // 1 for element
console.log("#page-banner of node name is:",banner.nodeName);
console.log("#page-banner of hasChild node is:",banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);

//parentNode 

console.log("Parent of book list is:", bookListTitle.parentNode.parentNode);

//parentelement

console.log("parent element is:", bookListTitle.parentElement.parentElement);

console.log(bookListTitle.childNodes[2].textContent);
console.log(bookListTitle.children);