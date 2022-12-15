// Exercise1
let h1Element = document.children[0].children[1].children[0];
console.log(h1Element);
// Exercise2
console.log(h1Element.parentElement);
// Exercise4
h1Element = document.getElementById("headline");
// Exercise3
console.log(h1Element.nextElementSibling);
// Exercise5
let highlightedParagraphs = document.body.querySelectorAll("p");
let highlightedParagraph = highlightedParagraphs[1];
// Exercise6
highlightedParagraph.innerText = "This was changed via Javascript";
console.log(highlightedParagraph);
// Exercise7
let firstParagraph = document.body.querySelector("p");
console.log(firstParagraph);
let link = document.createElement("a");
link.href = "https://www.google.at/?hl=de";
link.innerText = "This leads to Google";
firstParagraph.appendChild(link);
console.log(document.children);
// Exercise8
h1Element.remove();
console.log(document.children);
// Exercise9
let paragraphs = document.querySelectorAll("p");
paragraphs[1].parentElement.append(paragraphs[1]);
paragraphs[0].parentElement.append(paragraphs[0]);
paragraphs[2].parentElement.append(paragraphs[2]);
paragraphs[3].parentElement.append(paragraphs[3]);

// Exercise10
// DOM = Document Object Model

// Exercise11 + 12
let clickParagraph = document.getElementById("click-paragraph");
clickParagraph.addEventListener("click", clickedParagraph);

function clickedParagraph() {
  if (clickParagraph.innerText == "Clicked") {
    clickParagraph.innerText = "Ich bin klickbar!";
  } else {
    clickParagraph.innerText = "Clicked";
  }
}
console.log(clickParagraph);

// Exercise13
let inputField = document.querySelector("input");
inputField.addEventListener("input", () => console.log(inputField.value));
console.log(inputField);
