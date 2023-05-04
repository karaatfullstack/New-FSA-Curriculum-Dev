//Convert all string to lowercase:

function higherOrderFunc(arr, modifyFunc) {
  const modifiedArray = [];
  for (let i = 0; i < arr.length; i++) {
    modifiedArray.push(modifyFunc(arr[i]));
  }
  return modifiedArray;
}
const modifiedArray = higherOrderFunc(
  ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"],
  function (str_modified) {
    return str_modified.toLowerCase();
  }
);
console.log(modifiedArray);

//String length More than 11

function filterStringChar(stringGiven, condition) {
  return stringGiven.filter(condition);
}

function hasMoreThanElevenChars(string) {
  return string.length > 11;
}

const stringArray = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

const filteredStringArray = filterStringChar(
  stringArray,
  hasMoreThanElevenChars
);

console.log(filteredStringArray);


//Reverse String

function modifyGivenStrings(stringArray, callbackFunction) {
  return stringArray.map(callbackFunction);
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

const stringArray = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];

const modifiedTheStrings = modifyGivenStrings(stringArray, reverseString);

console.log(modifiedTheStrings);


