document.getElementById("name-input").addEventListener("change", checkName);

document.getElementById("email-input").addEventListener("change", checkValidEmail);

document.getElementById("submit").addEventListener("click", pushInputToArray);

const contactArray = [];

function pushInputToArray() {
  if (checkValidEmail() && checkName() && checkComment()) {
    contactArray.push({
      name: document.getElementById("name-input").value,
      email: document.getElementById("email-input").value,
      comment: document.getElementById("comment-input").value,
    });
    alert("you did it!!!");
  }
  console.log(contactArray);
}

function checkValidEmail() {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (document.getElementById("email-input").value.match(mailformat)) {
    // alert("Valid email address!");
    document.getElementById("email-input").style.backgroundColor = "#5dda2f40";
    return true;
  } else {
    document.getElementById("email-input").style.backgroundColor = "#cc666692";
    alert("You have entered an invalid email address!");
    return false;
  }
}

function checkName() {
  // Kontrolle Name länge
  let name = document.getElementById("name-input").value;
  if (name.length <= 3) {
    alert("Name is to short");
  } else {
    return true;
  }
}

function checkComment() {
  // Kontrolle Kommentar länge
  let comment = document.getElementById("comment-input").value;
  if (comment.length <= 1) {
    alert("Please enter comment");
  } else {
    return true;
  }
}
