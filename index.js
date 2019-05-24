Array.prototype.famFill = function(value, startIndex, endIndex) {
  let newArray = [...this];
  return newArray.fill(value, startIndex, endIndex);
};

Array.prototype.famPop = function() {
  let newArray = [...this];
  const poppedItem = newArray.pop();
  return {
    arr: newArray,
    item: poppedItem,
  };
};

Array.prototype.famPush = function(element) {
  let newArray = [...this];
  let newLength = newArray.push(element);
  return {
    arr: newArray,
    len: newLength,
  };
};
let arr = [1, 2, 3, 4];

let newArr = arr.famPush(3);

console.log(arr);
console.log(newArr.len, newArr.arr);
