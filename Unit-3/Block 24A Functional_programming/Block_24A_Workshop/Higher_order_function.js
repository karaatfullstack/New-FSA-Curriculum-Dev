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

//Runner 

const createRunner = (speed) => (name) => {
  return {
    name,
    speed,
    location: 0,
    move: function () {
      this.location += speed;
    },
  };
};

const createFastRunner = createRunner(7);
const createSlowRunner = createRunner(3);

const foo = createFastRunner("FOO");
const bar = createSlowRunner("BAR");

function race(runner1, runner2, raceDistance) {
  runner1.location = 0;
  runner2.location = 0;

  while (runner1.location < raceDistance && runner2.location < raceDistance) {
    runner1.move();
    runner2.move();
  }

  if (runner1.location >= raceDistance && runner2.location >= raceDistance) {
    return "It's a tie!";
  } else if (runner1.location >= raceDistance) {
    return `${runner1.name} wins!`;
  } else {
    return `${runner2.name} wins!`;
  }
}

console.log(race(foo, bar, 100));

