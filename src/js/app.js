import ManualCoordsModal from "./ManualCoordsModal";
import Post from "./Post";
import { getCoordinates } from "./geolocation";
import Error from "./Error";

const container = document.querySelector(".container");
const form = document.querySelector(".form");
const input = document.querySelector(".form-textarea");
const postsContainer = document.querySelector(".posts");
let errorEl = null;

window.addEventListener("DOMContentLoaded", loadPostsFromLocalStorage);

input.addEventListener("input", () => {
  if (errorEl) {
    errorEl.error.remove();
    errorEl = null;
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const userInput = input.value.trim();

    if (userInput) {
      getCoordinates((coordinates) => {
        if (coordinates) {
          createPost(userInput, coordinates);
        } else {
          const manualCoordsModal = new ManualCoordsModal();
          manualCoordsModal.open((coords) => {
            if (coords) {
              console.log(coords);
              createPost(
                userInput,
                `[${coords.latitude.toFixed(5)}, ${coords.longitude.toFixed(5)}]`,
              );
              manualCoordsModal.close();
            }
          });
        }
      });
    } else {
      if (!errorEl) {
        errorEl = new Error(
          container,
          "Невозможно отправить пустой пост. Введите сообщение, запишите аудио или видео",
        );
      }
    }
  }
});

function createPost(content, coordinates) {
  const date = Date.now();
  const post = new Post(postsContainer, content, coordinates, date);
  post.bindToDOM();
  savePostToLocalStorage({ content, coordinates, date });
  form.reset();
}

function savePostToLocalStorage(postData) {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.push(postData);
  localStorage.setItem("posts", JSON.stringify(posts));
}
function loadPostsFromLocalStorage() {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  posts.forEach((data) => {
    const post = new Post(
      postsContainer,
      data.content,
      data.coordinates,
      data.date,
    );
    post.bindToDOM();
  });
}
