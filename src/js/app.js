import Serializer from "./Serializer";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-inline");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector(".form-control").value;
    const data = new Serializer(input);
    const cardName = data.verification();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      if (!card.classList.contains(cardName)) {
        card.classList.add("cdisabled");
      } else {
        card.classList.remove("cdisabled");
      }
    });
  });
});
