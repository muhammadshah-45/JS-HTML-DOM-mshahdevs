//What is HTMLCollection 

    // HTMLCollection is a live collection of elements. HTMLCollection is a dynamic collection, meaning it updates automatically as elements are added, removed, or changed.

    // HTMLCollection is not an Array. It does not have all the array methods (such as forEach, map, reduce, etc.). Instead, HTMLCollection provides methods like forEach() and item().

    // HTMLCollection is an iterable, so you can loop over it using a for...of loop or spread operator.


const title = document.getElementsByClassName("title");
console.log(title);