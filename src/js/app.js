import Serializer from "./Serializer";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-inline");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector(".form-control");
    const data = new Serializer(input.value);
    const cardName = data.verification();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      if (!card.classList.contains(cardName)) {
        card.classList.add("cdisabled");
      } else {
        card.classList.remove("cdisabled");
        input.classList.remove("incorrect");
        input.classList.add("correct");
      }
      if (cardName === "Unknown") {
        input.classList.remove("correct");
        input.classList.add("incorrect");
      }
    });
  });
});
