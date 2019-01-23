const $root = document.querySelector('#root');
const $memoryCard = document.createElement('article');
const $memoryCard_js = document.createElement("article");
const $memoryCard1 = document.createElement("article");
const $memoryCard2 = document.createElement("article");
const $memoryCard3 = document.createElement("article");

const $memoryCard4 = document.createElement("article");
const $memoryCard5 = document.createElement("article");
const $memoryCard6 = document.createElement("article");
const $memoryCard7 = document.createElement("article");
const $memoryCard8 = document.createElement("article");



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



$memoryCard1.classList.add("memory-card");
$root.insertBefore($memoryCard1, null);
$memoryCard1.insertAdjacentHTML("afterbegin", $icon);

$memoryCard2.classList.add("memory-card");
$memoryCard2.classList.add("-front");
$root.insertBefore($memoryCard2, null);
$memoryCard2.insertAdjacentHTML("afterbegin", $icon_js);





$memoryCard4.classList.add("memory-card");
$memoryCard4.classList.add("-front");
$root.insertBefore($memoryCard4, null);
$memoryCard4.insertAdjacentHTML("afterbegin", $icon_js);



$memoryCard3.classList.add("memory-card");
$root.insertBefore($memoryCard3, null);
$memoryCard3.insertAdjacentHTML("afterbegin", $icon);


$memoryCard5.classList.add("memory-card");
$root.insertBefore($memoryCard5, null);
$memoryCard5.insertAdjacentHTML("afterbegin", $icon);


$memoryCard6.classList.add("memory-card");
$root.insertBefore($memoryCard6, null);
$memoryCard6.insertAdjacentHTML("afterbegin", $icon);








