let textfield = document.getElementById("textfield");
let insertBtn = document.getElementById("insert-button");
let title = document.getElementById("title");
let section = document.getElementById("output-post");
let url = document.getElementById("homepage");
let category = document.getElementById("category");
let date = new Date().toLocaleTimeString();

textfield.addEventListener("input", (e) => {
  //   console.log(textfield.value.length);
  let maxLength = textfield.value.length;
  e.target.labels[0].innerText = "Text: " + maxLength + "/140";
});

insertBtn.addEventListener("click", addPost);

function addPost(e) {
  let card = document.createElement("div");
  let h2 = document.createElement("h2");
  let paragraph = document.createElement("p");
  let time = document.createElement("p");
  let link = document.createElement("a");
  let categoryDiv = document.createElement("div");

  categoryDiv.innerText = category.value;
  h2.innerText = title.value;
  paragraph.innerText = textfield.value;
  time.innerText = "Uhrzeit " + date;
  link.href = url.value;
  link.innerText = "Beitrag öffnen";

  section.prepend(card);
  card.classList.add("card");
  card.appendChild(categoryDiv);
  categoryDiv.classList.add("category-Div", category.value);
  card.appendChild(h2);
  card.appendChild(paragraph);
  card.appendChild(link);
  card.appendChild(time);
  e.preventDefault();
}
