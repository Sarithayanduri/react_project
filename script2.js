
const heading = document.querySelector("#title");
console.log("ID Selector:", heading);
const firstParagraph = document.querySelector(".text");
console.log("Class Selector:", firstParagraph);
const allParagraphs = document.querySelectorAll(".text");
console.log("All Class Elements:");
allParagraphs.forEach((element) => {
    console.log(element);
});
const divElement = document.querySelector("div");
console.log("Tag Selector:", divElement);
const button = document.querySelector("button");
console.log("Button:", button);
heading.textContent = "JavaScript Selectors Example";
button.textContent = "Submit";