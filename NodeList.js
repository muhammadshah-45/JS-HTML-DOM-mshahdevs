//What is NodeList 

    // NodeList is a live collection of nodes. NodeList is a dynamic collection, meaning it updates automatically as nodes are added, removed, or changed.

    // NodeList is not an Array. It does not have all the array methods (such as forEach, map, reduce, etc.). Instead, NodeList provides methods like forEach() and item().

    // NodeList is an iterable, so you can loop over it using a for...of loop or spread operator.

    const classAttribute = document.getElementById("heading");
    classAttribute.setAttribute("id","test");
    classAttribute.style.backgroundColor = "red";
    classAttribute.classList.add("heading-class");
    classAttribute.style.display = "flex";
    classAttribute.style.justifyContent = "center";
    classAttribute.style.alignItems = "center";
    // classAttribute.style.height = "100vh";
    console.log(classAttribute.innerText);
    document.write(classAttribute.innerText);
    console.log(classAttribute.classList);
    console.log(classAttribute.textContent);
    document.write(classAttribute.textContent);
    document.write(classAttribute.innerHTML);

    // // Create a NodeList from an HTMLCollection
    // const headingNodes = document.getElementsByClassName("heading");
    // console.log(headingNodes);
    // const headingNodeList = Array.from(headingNodes);
    // console.log(headingNodeList);

    const nodes = document.querySelectorAll("button"); // it returns nodeList to create for each method call
nodes.forEach(btn => console.log(btn));// 