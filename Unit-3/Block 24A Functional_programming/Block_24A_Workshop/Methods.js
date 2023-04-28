//forEach method:

["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"].forEach(function (
  str
) {
  console.log(str.toLowerCase());
});

//sort method:

const sortedArray = [
  "Hippopotamus",
  "King Cobra",
  "Giant Panda",
  "Crocodile",
].sort();
console.log(sortedArray);

//map method:

const mappedArray = [
  "Hippopotamus",
  "King Cobra",
  "Giant Panda",
  "Crocodile",
].map(function (str) {
  return str.toLowerCase();
});
console.log(mappedArray);

//reduce method:

const reducedValue = [
  "Hippopotamus",
  "King Cobra",
  "Giant Panda",
  "Crocodile",
].reduce(function (acc, str) {
  return acc + str.length;
}, 0);
console.log(reducedValue);

//filter method:

const filteredArray = [
  "Hippopotamus",
  "King Cobra",
  "Giant Panda",
  "Crocodile",
].filter(function (str) {
  return str.length > 10;
});
console.log(filteredArray);
