const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard(
  "img/icon-collabcode.svg",
  "Gueio - Mascote da CollabCode"
);
const $createMemoryCardFront = createMemoryCard(
  "img/icon-js.png",
  "-front",
  "Front End Javascript"
);

const $createMemoryCardC = createMemoryCard("img/icon-c.png", "-front", "C#");
const $createMemoryCardJava = createMemoryCard(
  "img/icon-java.png",
  "-front",
  "Java"
);
const $createMemoryCardCabeca = createMemoryCard(
  "img/icon-cabeca.png",
  "-front",
  "Code"
);
const $createMemoryCardPhp = createMemoryCard(
  "img/icon-php.png",
  "-front",
  "PHP"
);
const $createMemoryCardCelular = createMemoryCard(
  "img/icon-celular.png",
  "-front",
  "Celular"
);
const $createMemoryCardBug = createMemoryCard(
  "img/icon-bug.png",
  "-front",
  "Bugs"
);
const $createMemoryCardResposive = createMemoryCard(
  "img/icon-responsivo.png",
  "-front",
  "Responsivo"
);

const $createMemoryCardWoman = createMemoryCard("img/icon-woman.png","-front", "Woman Devs");

const $createMemoryCardimgSettings = createMemoryCard("img/icon-settings.png", "-front", "Settings");
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
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
