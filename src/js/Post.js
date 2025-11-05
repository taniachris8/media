export default class Post {
  constructor(parentEl, content, coordinates, date) {
    this.parentEl = parentEl;
    this.content = content;
    this.coordinates = coordinates;
    this.date = date;
  }

  bindToDOM() {
    this.post = document.createElement("div");
    this.post.classList.add("post");
    this.post.innerHTML = `
    <input class="checkbox" type="checkbox">
    <div class="content-container">
    <span class="date">${this.formatDate()}</span>
    <p class="content">${this.content}</p>
    <p class="coordinates">${this.coordinates}</p>
    </div>
    `;
    this.parentEl.prepend(this.post);
  }

  formatDate() {
    const date = new Date(this.date);
    const dateStr = date.toLocaleDateString("ru-RU");
    const timeStr = date.toLocaleTimeString("ru-RU", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    return `${dateStr} ${timeStr}`;
  }
}
