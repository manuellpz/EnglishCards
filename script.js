const cardPhrase = document.querySelector(".card_phrase");
const cardContainer = document.querySelector(".card_container");
let actualPhrase = "";
let words;
let meaning;
let counter = 0;

addEventListener("load", () => {
  fetch("./BACKEND/operations.php?consulta")
    .then((response) => response.json())
    .then((data) => {
      words = data;
      actualPhrase = data[0].word;
      cardPhrase.innerHTML = actualPhrase;
    })
    .catch((error) => console.error(error));
});

cardContainer.addEventListener("click", () => {
  meaning = words[counter].meaning;
  cardPhrase.innerHTML = meaning;
  cardContainer.classList.add("meaning");
});

document.querySelector("#btn_next").addEventListener("click", () => {
  counter++;
  if (counter == words.length) counter = 0;
  actualPhrase = words[counter].word;
  cardContainer.classList.remove("meaning");
  cardPhrase.innerHTML = actualPhrase;
});
