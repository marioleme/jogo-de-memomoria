const $root = document.querySelector('#root');
const $memoryCard = document.createElement('article');
const $memoryCard_js = document.createElement("article");
const $icon = `
<img 
    src="img/icon-collabcode.svg" 
    alt="Gueio - Mascote da CollabCode"
    class="icon"
    >`;

const $icon_js = `
    <img 
    class="icon" 
    src="img/icon-js.png" 
    alt="Js"
    >`
;
$memoryCard.classList.add('memory-card');
$root.insertBefore($memoryCard, null);

$memoryCard_js.classList.add('memory-card');
$memoryCard_js.classList.add("-front");

$root.insertBefore($memoryCard_js,$memoryCard);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);
$memoryCard_js.insertAdjacentHTML("afterbegin", $icon_js);

