
createMemoryCardFront();
createMemoryCardFront();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();
createMemoryCard();


const $Cards = document.querySelectorAll(".memory-card")

$Cards.forEach(function ($card, key) {
    $card.addEventListener("click", mostrarFace)
})

function mostrarFace() {
    alert('Clicou');
}







