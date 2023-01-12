const postsContainer = document.getElementById("posts-container");
const fetchBtn = document.getElementById("fetch-btn");
fetchBtn.addEventListener("click", fetchPosts);

// const xmlhttp = new XMLHttpRequest();
// xmlhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");

// xmlhttp.onload = function () {
//   const response = JSON.parse(this.responseText);

//   response.forEach((post) => {
//     console.log(post);
//     let postBox = document.createElement("div");
//     postBox.setAttribute("class", "post");
//     let header = document.createElement("h1");
//     header.innerText = post.title;
//     let text = document.createElement("p");
//     text.innerText = post.body;
//     postBox.append(header);
//     postBox.append(text);
//     postsBox.append(postBox);
//   });
// };
// xmlhttp.send();

function sendHttpRequest(method, url, post) {
  let myPromise = new Promise(function (resolve, reject) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open(method, url);
    xmlhttp.onload = function () {
      const response = JSON.parse(this.responseText);
      resolve(response);
    };
    xmlhttp.send(JSON.stringify(post));
  });
  return myPromise;
}

async function fetchPosts() {
  const responseData = await sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts");
  responseData.forEach((post) => {
    console.log(post);
    let postBox = document.createElement("div");
    postBox.setAttribute("class", "post");
    let header = document.createElement("h1");
    header.innerText = post.title.toUpperCase();
    let text = document.createElement("p");
    text.innerText = post.body;
    postBox.append(header);
    postBox.append(text);
    postsContainer.append(postBox);
  });
}

function createPost(title, content) {
  const userId = 5445;
  const post = {
    title: title,
    body: content,
    userId: userId,
  };

  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
}

createPost("Hallo", "fdhjghjgjdjdjdgjdj");
