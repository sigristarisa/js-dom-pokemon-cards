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

const cardTexts = document.createElement("ul")
cardTexts.setAttribute("class", "card--text")

for(let i = 0; i < 6; i++) {
    const text = document.createElement("li")
    text.innerText = data[0].stats[i].stat.name + " : " + data[0].stats[i]["base_stat"]
    cardTexts.appendChild(text)
}

card.append(pokemonName)
card.append(img)
card.append(cardTexts)

cards.appendChild(card)