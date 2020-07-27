//Objects...

const person = {
  name: "John",
  address: {
    country: "USA",
    city: "San Francisco"
  }
};
console.log(person);

// updating a key in an object and copying an object via Object.assign - shallow copy
const newPerson = Object.assign({}, person, { name: "Olena" }); //can take 3 properties
console.log(newPerson);

// updating a key in an object and copying an object via ...spread - DEEP COPY
const anotherDude = {
  ...person,
  name: "Bob",
  address: {
    ...person.address,
    city: "New York"
  }
};
console.log(anotherDude);
anotherDude.address.country = "Canada";

console.log(person);

//............Arrays

const numbers = [1, 2, 3];
//adding number at the beginning or end
const added = [0, ...numbers, 4];
console.log(added);

//adding number in a specific index:
const index = numbers.indexOf(2);
const addedIn = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
console.log(addedIn);

//removing number
const removed = numbers.filter(n => n !== 2);
console.log(removed);

//swapping/updating number for another number
const updated = numbers.map(n => (n === 2 ? 20 : n));
console.log(updated);

recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"]
};

// function sayHello() {
//   return function() {
//     return "Hello Olena";
//   };
// }

// const other = sayHello();
// console.log(other);
// const message = other();
// console.log(message);

// function greet(fnMessage) {
//   console.log(fnMessage());
// }

// greet(other);

import { compose, pipe } from "lodash/fp";

let input = "   JavaScript   ";

const trimmed = str => str.trim();
const tolowercase = str => str.toLowerCase();
const wrapped = type => str => `<${type}>${str}<${type}>`;

const transform = pipe(trimmed, tolowercase, wrapped("span"));
console.log(transform(input));

let myInput = { tag: "JAVASCRIPT" };
const nameOnly = myInput.tag;

console.log(transform(nameOnly));

const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"]
};
console.log(recipe);

const newRecipe = { ...recipe, ingredients: [...recipe.ingredients, "cream"] };
console.log(newRecipe);

const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map(i => (i === "egg" ? "eggwhite" : i))
};

console.log(updated);

const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(i => i !== "egg")
};

console.log(removed);
