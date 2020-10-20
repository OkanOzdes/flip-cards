/* const card = document.querySelector(".card__inner");

card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
}); */

const cards = document.querySelectorAll(".card__inner");
cards.forEach((card) => {
    card.addEventListener("click", () => {
        if(!card.classList.contains("is-flipped")) {
            card.classList.add("is-flipped");
        } else {
            card.classList.remove("is-flipped");
        }
    });
});