// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Couldn't find the pokemon");
//     }
//   })
//   .then(data => console.log(data.weight))
//   .catch( error => console.error(error) );


async function fetchPokemon() {
  try { 
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Couldn't find pokemon");
    }

    const data = await response.json();

    // Check if sprites exist in the data
    if (data.sprites && data.sprites.front_default) {
      const pokemonImage = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonImage");

      // Check if imgElement exists before setting properties
      if (imgElement) {
        imgElement.src = pokemonImage;
        imgElement.style.display = "block";
      } else {
        console.error("Image element not found");
      }
    } else {
      console.error("Sprites data not found in the response");
    }
  }
  catch(error) {
    console.error(error);
  }
}

fetchPokemon();