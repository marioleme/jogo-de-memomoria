const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard({
  src: "img/icon-collabcode.svg",
  alt: "Gueio - Mascote da CollabCode"
});
const $createMemoryCardFront = createMemoryCard({
  src: "img/icon-js.png",
  nameClass: "-front",
  alt: "Front End Javascript"
});

const $createMemoryCardC = createMemoryCard({
  src: "img/icon-c.png",
  nameClass: "-front",
  alt: "C#"
});
const $createMemoryCardJava = createMemoryCard({
  src: "img/icon-java.png",
  nameClass: "-front",
  alt: "Java"
});
const $createMemoryCardCabeca = createMemoryCard({
  src: "img/icon-cabeca.png",
  nameClass: "-front",
  alt: "Code"
});
const $createMemoryCardPhp = createMemoryCard({
  src: "img/icon-php.png",
  nameClass: "-front",
  alt: "PHP"
});
const $createMemoryCardCelular = createMemoryCard({
  src: "img/icon-celular.png",
  nameClass: "-front",
  alt: "Celular"
});
const $createMemoryCardBug = createMemoryCard({
  src: "img/icon-bug.png",
  nameClass: "-front",
  alt: "Bugs"
});
const $createMemoryCardResposive = createMemoryCard({
  src: "img/icon-responsivo.png",
  nameClass: "-front",
  alt: "Responsivo"
});

const $createMemoryCardWoman = createMemoryCard({
  src: "img/icon-woman.png",
  nameClass: "-front",
  alt: "Woman Devs"
});

const $createMemoryCardimgSettings = createMemoryCard({
  src: "img/icon-settings.png",
  nameClass: "-front",
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
