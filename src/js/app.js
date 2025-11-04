import ManualCoordsModal from "./ManualCoordsModal";
import Post from "./Post";
import { getCoordinates } from "./geolocation";

const form = document.querySelector(".form");
const input = form.querySelector(".input");
const postsContainer = document.querySelector(".posts");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const userInput = input.value.trim();

    if (userInput) {
      getCoordinates((coordinates) => {
        if (coordinates) {
          const post = new Post(
            postsContainer,
            userInput,
            coordinates,
            Date.now(),
          );
          post.bindToDOM();
          form.reset();
        } else {
          console.log("Не удалось получить координаты");
          const manualCoordsModal = new ManualCoordsModal();
          manualCoordsModal.open((coords) => {
            console.log(coords);
            if (coords) {
              const post = new Post(
                postsContainer,
                userInput,
                `[${coords.latitude}, ${coords.longitude}]`,
                Date.now(),
              );
              manualCoordsModal.close();
              post.bindToDOM();
              form.reset();
            }
          });
        }
      });
    } else {
      console.log("Пожалуйста введите сообщение");
    }
  }
});
