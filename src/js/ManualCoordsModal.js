import { isValid, formatCoords } from "./geolocation";

export default class ManualCoordsModal {
  constructor() {
    this.container = document.querySelector(".container");
    this.modal = document.createElement("div");
    this.modal.classList.add("coords-modal");
    this.modal.innerHTML = `
        <p>Что-то пошло не так</p>
        <p>К сожалению, нам не удалось определить ваше местоположение, пожалуйста, дайте разрешение на использование геолокации, либо введите координаты вручную.</p>
        <p>Широта и долгота через запятую</p>
        <form class="coords-form">
        <input class="coords-input" type="text" name="coords">
        <div class="buttons">
        <button class="close-btn">Отмена</button>
        <button type="submit" class="submit-btn">ОК</button>
        </div>
        </form>
        `;

    this.container.append(this.modal);

    this.form = this.modal.querySelector(".coords-form");
    this.input = this.form.querySelector(".coords-input");
    this.closeBtn = this.modal.querySelector(".close-btn");

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.form.addEventListener("submit", this.handleSubmit);
    this.closeBtn.addEventListener("click", this.close);
  }

  open(callback) {
    this.callback = callback;
    this.modal.classList.add("active");
  }

  close() {
    this.modal.classList.remove("active");
    this.form.reset();
  }

  handleSubmit(e) {
    e.preventDefault();
    const usersCoords = this.input.value;
    console.log(this.input);

    if (isValid(usersCoords)) {
      const formattedCoords = formatCoords(usersCoords);
      if (this.callback) this.callback(formattedCoords);
      this.close();
    } else {
      console.log("Пожалуйста введите корректные координаты");
    }
  }
}
