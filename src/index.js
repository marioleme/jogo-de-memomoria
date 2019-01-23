const $root = document.querySelector('#root');
const $memoryCard = document.createElement('article');
const $memoryCard_js = document.createElement("article");
const $borda = document.createElement("div");
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
$memoryCard_js.classList.add('memory-card_front');
$borda.classList.add('ball')
$root.insertBefore($memoryCard, null);
$root.insertBefore($memoryCard_js,null);
$memoryCard_js.insertBefore($borda, null);
$borda.insertAdjacentHTML('afterbegin',$icon_js)
$memoryCard.insertAdjacentHTML('afterbegin', $icon)