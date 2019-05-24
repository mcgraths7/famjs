module.exports = [
  (Array.prototype.famFill = function(value, startIndex, endIndex) {
    let newArray = [...this];
    let filledArray = newArray.map(item => {
      if (
        newArray.indexOf(item) >= startIndex &&
        newArray.indexOf(item) <= endIndex
      ) {
        return (item = value);
      } else {
        return item;
      }
    });
    return filledArray;
  }),
  (Array.prototype.famPop = function(numberToPop = 1) {
    const newArray = [...this];
    const len = newArray.length;
    const poppedArray = newArray.slice(0, len - numberToPop);
    const poppedItem = newArray.slice(len - numberToPop, len);
    return {
      arr: newArray,
      items: poppedItem,
    };
  }),
  (Array.prototype.famPush = function(element) {
    const newArray = [...this];
    return newArray.concat(element);
  }),
  (Array.prototype.famReverse = function() {
    const newArray = [...this];
    let reversedArray = [];
    for (let i = newArray.length - 1; i >= 0; i--) {
      reversedArray = reversedArray.concat(newArray[i]);
    }
    return reversedArray;
  }),
  (Array.prototype.famShift = function(numberToShift = 1) {
    const newArray = [...this];
    const len = newArray.length;
    const shiftedArray = newArray.slice(numberToShift, len);
    const shiftedItems = newArray.slice(0, numberToShift);
    return {
      arr: shiftedArray,
      items: shiftedItems,
    };
  }),
  (Array.prototype.famSort = function(sortFunction) {
    let newArray = [...this];
    return newArray.sort(sortFunction);
  }),
  (Array.prototype.famSplice = function(
    startIndex,
    deleteCount,
    itemsToSpliceIn
  ) {
    let newArray = [...this];
    const itemArgs = [].concat(...Array.from(arguments)).slice(2);

    newArray.splice(startIndex, deleteCount, ...itemArgs);
    return newArray;
  }),
  (Array.prototype.famUnshift = function(itemsToAdd) {
    let newArray = [...this];
    const argArray = [].concat(...Array.from(arguments)).famReverse();
    const unshiftedArray = newArray.concat(argArray);
    return unshiftedArray;
  }),
];
