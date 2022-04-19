console.log(data);
const cards = document.querySelector(".cards");

for (let i = 0; i < data.length; i++) {
  // create cards
  const card = document.createElement("li");
  card.setAttribute("class", "card");

  // create h2 pokemon names
  const pokemonName = document.createElement("h2");
  pokemonName.setAttribute("class", "card--title");
  pokemonName.innerText = data[i].name[0].toUpperCase() + data[i].name.slice(1);

  // create the image
  const img = document.createElement("img");
  img.setAttribute("class", "card--img");
  img.setAttribute("width", 256);
  img.src = data[i].sprites.other["official-artwork"]["front_default"];

  // create the texts
  const cardTexts = document.createElement("ul");
  cardTexts.setAttribute("class", "card--text");

  for (let j = 0; j < 6; j++) {
    const text = document.createElement("li");
    text.innerText = `${data[i].stats[j].stat.name.toUpperCase()} : ${
      data[i].stats[j]["base_stat"]
    }`;
    cardTexts.append(text);
  }

  // create the texts of in which versions it appeared
  const versionTexts = document.createElement("div");
  versionTexts.innerText = "APPEARED IN :";
  versionTexts.setAttribute("class", "card--text");

  const text = document.createElement("p");
  for (let k = 0; k < data[i]["game_indices"].length; k++) {
    text.innerText += `${data[i]["game_indices"][k].version.name}, `;
  }
  versionTexts.append(text);

  // append elements
  card.append(pokemonName, img, cardTexts, versionTexts);
  cards.append(card);
}
