
const $root = document.querySelector('#root');
const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $createMemoryCardFront = createMemoryCardFront();


$cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardFront);

$root.insertAdjacentElement('beforeend', $cardsWrapper);











