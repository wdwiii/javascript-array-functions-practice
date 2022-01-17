const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const charNames = characters.map((character) => character.name);
console.log(`Names:`, charNames);
//2. Get array of all heights
const charHeights = characters.map((character) => character.height);
console.log(`Heights:`, charHeights);
//3. Get array of objects with just name and height properties
// const [{name, height}] = characters.map(character => character)
// console.log(charNameAndHeight)
//4. Get array of all first names
const charFirstNames = characters.map(
  (character) => character.name.split(" ")[0]
);
console.log("First names ONLY:", charFirstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((tot, curr) => tot + curr.mass, 0);
console.log(`Total mass of all characters: `, totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((tot, curr) => tot + curr.height, 0);
console.log(`Total height of all characters: `, totalHeight);
//3. Get total number of characters by eye color
const charactersWithBlueEyes = characters.reduce((tot, curr) => {
  if (tot[curr.eye_color]) tot[curr.eye_color]++;
  else tot[curr.eye_color] = 1;
  return tot;
}, {});
console.log(`Characters by eye color: `, charactersWithBlueEyes);
//4. Get total number of characters in all the character names
const charactersInName = characters.reduce(
  (tot, curr) => tot + curr.name.length,
  0
);
console.log(
  "Total number of characters in all the character names: ",
  charactersInName
);

//***FILTER***
//1. Get characters with mass greater than 100
const massGreater100 = characters.filter((character) => {
  if (character.mass > 100) return character.name;
});
console.log(`Mass greater than 100:`, massGreater100);
//2. Get characters with height less than 200
const heightLess200 = characters.filter((character) => {
  if (character.height < 200) return character.name;
});
console.log(`Height less than 200:`, heightLess200);
//3. Get all male characters
const maleCharacters = characters.filter(
  (character) => character.gender === "male"
);
console.log(`Male characters:`, maleCharacters);
//4. Get all female characters
const femaleCharacters = characters.filter(
  (character) => character.gender === "female"
);
console.log("Female characters", femaleCharacters);

//***SORT***
//1. Sort by mass
console.log(
  "Sort by mass:",
  characters.sort((a, b) => a.mass - b.mass)
);
//2. Sort by height
console.log(
  "Sort by height:",
  characters.sort((a, b) => b.height - a.height)
);
//3. Sort by name
console.log(
  "Sort by name:",
  characters.sort((a, b) => {
    if (a.name < b.name) return -1;
    return 1;
  })
);

//4. Sort by gender
console.log(
  "Sort by gender:",
  characters.sort((a, b) => {
    if (a.gender > b.gender) return 1;
    return -1;
  })
);

//***EVERY***
//1. Does every character have blue eyes?
console.log(
  "Does every character have blue eyes?",
  characters.every((character) => character.eye_color === "blue")
);
//2. Does every character have mass more than 40?
console.log(
  "Does every character have mass more than 40?",
  characters.every((character) => character.mass > 40)
);
//3. Is every character shorter than 200?
console.log(
  "Is every character shorter than 200?",
  characters.every((character) => character.height < 200)
);
//4. Is every character male?
console.log(
  "Is every character male?",
  characters.every((character) => character.gender === "male")
);

//***SOME***
//1. Is there at least one male character?
console.log(
  "Is there at least one male character?",
  characters.some((character) => character.gender === "male")
);
//2. Is there at least one character with blue eyes?
console.log(
  "Is there at least one character with blue eyes?",
  characters.some((character) => character.eye_color === "blue")
);
//3. Is there at least one character taller than 210?
console.log(
  "Is there at least one character taller than 210?",
  characters.some((character) => character.height > 210)
);
//4. Is there at least one character that has mass less than 50?
console.log(
  "Is there at least one character that has mass less than 50?",
  characters.some((character) => character.mass < 50)
);
