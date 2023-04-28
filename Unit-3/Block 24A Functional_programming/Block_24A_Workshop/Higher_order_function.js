//Higher-order function:

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
