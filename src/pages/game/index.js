const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const createMemoryCard = MemoryCard();

const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.svg",
  alt: "Gueio - Mascote da CollabCode"
});
const $createMemoryCardFront = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Front End Javascript"
});

const $createMemoryCardC = createMemoryCard({
  src: "img/icon-c.png",
  alt: "C#"
});
const $createMemoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  alt: "Java"
});
const $createMemoryCardCabeca = createMemoryCard({
  src: "img/icon-cabeca.png",
  alt: "Code"
});
const $createMemoryCardPhp = createMemoryCard({
  src: "img/icon-php.png",
  alt: "PHP"
});
const $createMemoryCardCelular = createMemoryCard({
  src: "img/icon-celular.png",
  alt: "Celular"
});
const $createMemoryCardBug = createMemoryCard({
  src: "img/icon-bug.png",
  alt: "Bugs"
});
const $createMemoryCardResposive = createMemoryCard({
  src: "img/icon-responsivo.png",
  alt: "Responsivo"
});

const $createMemoryCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  alt: "Woman Devs"
});

const $createMemoryCardimgSettings = createMemoryCard({
  src: "img/icon-settings.png",
  alt: "Settings"
});
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardFront);

$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardPhp);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardCelular);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardBug);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardResposive);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $createMemoryCardimgSettings);

$root.insertAdjacentElement("beforeend", $cardsWrapper);


