const cards = document.querySelector(".cards")

for(let i = 0; i < data.length; i++) {
    const card = document.createElement("li")
    card.setAttribute("class", "card")

    const pokemonName = document.createElement("h2")
    pokemonName.setAttribute("class", "card--title")
    pokemonName.innerText = data[i].name[0].toUpperCase() + data[i].name.slice(1)

    const img = document.createElement("img")
    img.setAttribute("class", "card--img")
    img.setAttribute("width", 256)
    img.src = data[i].sprites.other["official-artwork"]["front_default"]

    const cardTexts = document.createElement("ul")
    cardTexts.setAttribute("class", "card--text")

    for(let j = 0; j < 6; j++) {
        const text = document.createElement("li")
        text.innerText = (data[i].stats[j].stat.name).toUpperCase() + " : " + data[i].stats[j]["base_stat"]
        cardTexts.appendChild(text)
    }

    card.append(pokemonName)
    card.append(img)
    card.append(cardTexts)

    cards.appendChild(card)
}