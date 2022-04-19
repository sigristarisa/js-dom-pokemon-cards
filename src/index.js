console.log(data);
const cards = document.querySelector(".cards");

for (const pokemon of data) {
  // create cards
  const card = document.createElement("li");
  card.setAttribute("class", "card");

  // create h2 pokemon names
  const pokemonName = document.createElement("h2");
  pokemonName.setAttribute("class", "card--title");
  pokemonName.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  // create the image
  const img = document.createElement("img");
  img.setAttribute("class", "card--img");
  img.setAttribute("width", 256);
  img.src = pokemon.sprites.other["official-artwork"]["front_default"];

  // create the texts
  const cardTexts = document.createElement("ul");
  cardTexts.setAttribute("class", "card--text");

  for (let j = 0; j < 6; j++) {
    const text = document.createElement("li");
    text.innerText = `${pokemon.stats[j].stat.name.toUpperCase()} : ${
      pokemon.stats[j]["base_stat"]
    }`;
    cardTexts.append(text);
  }

  // create the texts of in which versions it appeared
  const versionTexts = document.createElement("div");
  versionTexts.innerText = "APPEARED IN :";
  versionTexts.setAttribute("class", "card--text");

  const text = document.createElement("p");
  for (const index of pokemon["game_indices"]) {
    text.innerText += `${index.version.name}, `;
  }
  versionTexts.append(text);

  // append elements
  card.append(pokemonName, img, cardTexts, versionTexts);
  cards.append(card);
}
