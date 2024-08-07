//What is HTMLCollection 

    // HTMLCollection is a live collection of elements. HTMLCollection is a dynamic collection, meaning it updates automatically as elements are added, removed, or changed.

    // HTMLCollection is not an Array. It does not have all the array methods (such as forEach, map, reduce, etc.). Instead, HTMLCollection provides methods like forEach() and item().

    // HTMLCollection is an iterable, so you can loop over it using a for...of loop or spread operator.


const title = document.getElementsByClassName("title"); // u can not add forEach method because it is an HTMLCollection
console.log(title);

Array.from(title).forEach(title => console.log(title));
//querySelector

const heading = document.querySelector("h1");
console.log(heading);

//querySelectorAll

const paragraphs = document.querySelectorAll("p")[1];
console.log(paragraphs);

const paragraphsAll = document.getElementsByClassName("paragraphs");
// console.log(paragraphsAll);

// console.log(paragraphsAll[2]);
// console.log(paragraphsAll.length);
// console.log(paragraphsAll.item(0).innerHTML);

const divElement = document.querySelector('div');

console.log(divElement.childNodes[0]);

Array.from(divElement).forEach(item => console.log(item));

document.body.style.backgroundColor="black";
document.body.style.color="white";

const ulList = document.querySelector("ul");

const secondList= ulList.querySelectorAll("li:nth-child(2)");