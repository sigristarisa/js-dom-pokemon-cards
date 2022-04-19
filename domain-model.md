## Requirements (Basic criteria)
- The `data.js` file contains a global array that contains information on different pokemon types
- Inside `index.js`, you should loop through this array and render a "card" for each pokemon type.
- You will also find an HTML example commented out in the `index.html`
- Use the exact CSS classes you see in the example HTML to obtain the same style for each card
- The cards should be nested inside `<ul class="cards"></ul>`
- Use the `official-artwork` object key as the images for the card. The images are all inside of the `sprites` key, in each pokemon object
- Render all the cards on the page that represents all the pokemons, recreating the same layout, using JS

## Domain Models
- create li and add an attribute "class=card"
- append li class=card to ul class="cards" as a child
- in li  class=card, create h2 and add an attribute "class=card--title"
- add h2 class=card--title html.innerText = "name" (data[i].name)
- create img and add an attribute "class=card--img", "width=256"
- add src to img (data[0].sprites.other["official-artwork"]["front_default"])
- append h2, img to li class=card as a child
- create ul and add an attribute "class=card--text"
- create a for loop and generate li 6 times
-  each li will have innerText = stats[i].stat.name: states[i][base_stat]
-  append all li to ul class=card--text

 
### ideal structure
```
  <li class="card">
  <h2 class="card--title">Bulbasaur</h2>
  <img
    width="256"
    class="card--img"
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  />
  <ul class="card--text">
    <li>HP: 45</li>
    <li>ATTACK: 49</li>
    <li>DEFENSE: 49</li>
    <li>SPECIAL-ATTACK: 65</li>
    <li>SPECIAL-DEFENSE: 65</li>
    <li>SPEED: 45</li>
  </ul>
</li>
```