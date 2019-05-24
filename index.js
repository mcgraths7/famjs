module.exports = [
  (Array.prototype.famFill = function(value, startIndex, endIndex) {
    let newArray = [...this];
    return newArray.fill(value, startIndex, endIndex);
  }),

  (Array.prototype.famPop = function() {
    let newArray = [...this];
    const poppedItem = newArray.pop();
    return {
      arr: newArray,
      item: poppedItem,
    };
  }),

  (Array.prototype.famPush = function(element) {
    let newArray = [...this];
    let newLength = newArray.push(element);
    return {
      arr: newArray,
      len: newLength,
    };
  }),

  (Array.prototype.famReverse = function() {
    let newArray = [...this];
    return newArray.reverse();
  }),

  (Array.prototype.famShift = function() {
    let newArray = [...this];
    let shiftedItem = newArray.shift();
    return {
      arr: newArray,
      item: shiftedItem,
      len: newArray.length,
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
    if (argArray.length > 0) {
      argArray.forEach(arg => {
        newArray.unshift(arg);
      });
    }
    return {
      arr: newArray,
      len: newArray.length,
    };
  }),
];
