export default class Error {
  constructor(parentEl, message) {
    this.parentEl = parentEl;
    this.message = message;

    this.error = document.createElement("p");
    this.error.classList.add("error");
    this.error.textContent = this.message;
    this.parentEl.append(this.error);
  }
}
