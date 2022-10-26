/**
 * To run this file in Gitpod, use the 
 * command node destruction.js in the terminal
 */

// Desctructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Desctructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs;
console.log.apply(mike, jill, alicia);

// Desctructuring subjects
let lagnguages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thridLanguage: "german",
    fourthLanguage: "japanese",
};
let { firstLanguage, thridLanguage } = languages2;
console.log(firstLanguage, thridLanguage);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;

console.log(favorit);
console.log(secondFavorit);
console.log(secondOthers);

let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegeterian",
    andrea: "steak"
};
let { brian, anna, ...rest } = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);