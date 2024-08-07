
// Get the container element
const container = document.getElementById('container');

// Log the node type and name of the container element
console.log(container.nodeType); // 1 (Element Node)
console.log(container.nodeName); // DIV

// Get the first child node of the container element
const firstChild = container.firstChild;

// Log the node type and name of the first child node
console.log(firstChild.nodeType); // 3 (Text Node)
console.log(firstChild.nodeName); // #text

// Get the paragraph element
const para = document.getElementById('para');

// Log the node type and name of the paragraph element
console.log(para.nodeType); // 1 (Element Node)
console.log(para.nodeName); // P

// Get the comment node
const comment = container.childNodes[1];

// Log the node type and name of the comment node
console.log(comment.nodeType); // 8 (Comment Node)
console.log(comment.nodeName); // #comment

// Append a new text node to the container element
const newText = document.createTextNode(' This is a new text node.');
container.appendChild(newText);

// Remove the paragraph element
container.removeChild(para);