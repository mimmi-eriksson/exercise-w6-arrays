const pokemons = [
  "Bulbasaur",
  "Ivysaur",
  "Venusaur",
  "Charmander",
  "Charmeleon",
  "Charizard",
  "Squirtle",
  "Wartortle",
  "Blastoise",
  "Metapod",
  "Weedle",
  "Pikachu",
  "Pidgey"
];

const countThem = () => {
  // print out, in a sentence, how many pokemons I have.
  // like: "I have x pokemons!"
  console.log(`I have ${pokemons.length} pokemons!`)
};
countThem()

const orderThem = () => {
  // order the pokemons alphabetically
  console.log(pokemons.sort())
};
orderThem()

const flipThem = () => {
  // reverse the order of the pokemons
  console.log(pokemons.reverse())
};
flipThem()

const makeThemBig = () => {
  // print the pokemons in UPPERCASE letters
  pokemons.forEach((item) => {
    console.log(item.toUpperCase())
  })
};
makeThemBig()

const onlyTheBs = () => {
  // only print the pokemons that starts with B
  pokemons.forEach((pokemon) => {
    (pokemon.charAt(0) === "B") ? console.log(pokemon) : ''
  })
};
onlyTheBs()

// ALT 1
// const notTheCs = () => {
//   // remove all pokemons that starts with C
//   pokemons.forEach((pokemon) => {
//     (pokemon.charAt(0) === "C") ? pokemons.pop() : console.log(pokemon)
//   })
// };

const notTheCs = () => {
  // remove all pokemons that starts with C
  const startsWithC = (pokemon) => {

    return (pokemon.charAt(0) !== "C" ? pokemon : '')
  }
  let filteredPokemons = pokemons.filter(startsWithC)

  return filteredPokemons


};

console.log(pokemons)
console.log(notTheCs())





const nameAndIdThanks = () => {
  // print out name and index of all pokemons
  // like: number x - Squirtle
};

const catchPokemon = name => {
  // add a pokemon with a name of your choice to the list,
  // print the list so you see its there.
};

const didICatchIt = name => {
  // check the pokemons to see if a specific pokemon is in the array
};

const addInThirdPlace = () => {
  // add the pokemon "Clefairy" in the third place of the array
  // print the list so you see its there.
};

// ***BONUS***
const theLongestName = () => {
  // find the pokemon with the longest name
};
