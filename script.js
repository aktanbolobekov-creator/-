
const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.style.cursor = "pointer";

    card.addEventListener("click", function() {
        const name = card.querySelector("h3").textContent;
        alert("Сиз тандадыңыз: " + name);
    });
});
