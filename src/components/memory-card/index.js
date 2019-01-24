function createMemoryCard() {
    const $memoryCard = document.createElement("article");
    const $icon = `
    <img 
        src="img/icon-collabcode.svg" 
        alt="Gueio - Mascote da CollabCode"
        class="icon"
        >`;

    $memoryCard.classList.add("memory-card");
    $memoryCard.insertAdjacentHTML("afterbegin", $icon);
    $wrapCards.insertBefore($memoryCard, null);

}

function createMemoryCardFront(){
    const $memoryCard_js = document.createElement("article");

    const $icon_js = `
    <img 
    class="icon" 
    src="img/icon-js.png" 
    alt="Js"
    >`
        ;
    $memoryCard_js.classList.add('memory-card');
    $memoryCard_js.classList.add("-front");

    $wrapCards.insertBefore($memoryCard_js, null);
    $memoryCard_js.insertAdjacentHTML("afterbegin", $icon_js);
}
