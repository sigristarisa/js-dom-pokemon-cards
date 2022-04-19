//You can start simple and just render a single 
//pokemon card from the first element
console.log(data[0]);

const cards = document.querySelector(".cards")

const card = document.createElement("li")
card.setAttribute("class", "card")

const pokemonName = document.createElement("h2")
pokemonName.setAttribute("class", "card--title")
pokemonName.innerText = data[0].name

const img = document.createElement("img")
img.setAttribute("class", "card--img")
img.setAttribute("width", 256)
img.src = data[0].sprites.other["official-artwork"]["front_default"]

card.append(pokemonName)
card.append(img)

cards.appendChild(card)