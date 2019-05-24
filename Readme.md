# FAM -> Functional Array Methods

This library is designed for people who are interested in functional programming, but find that some array methods don't follow the principals.

## Methods:

### Array.prototype.famFill(value, startIndex, endIndex);

Works the same way as Array.prototype.fill, but returns a new array, leaving the source untouched.

#### Example

`const arr1 = [1, 2, 3, 4];`

`const arr2 = arr1.famFill(3, 0, 3);`

expect arr1 = [1, 2, 3, 4]

expect arr2 = [3, 3, 3, 3]

### Array.prototype.famPop(numberToPop = 1);

Works the same way as Array.prototype.pop(), except returns an object with both the popped items, and the new array, leaving the source untouched.

Accepts an argument for the number of elements to remove. Will default to 1 if no argument provided.

These are accessible via "arr" and "items" properties

#### Example

`const arr1 = [1, 2, 3, 4];`

`const arr2 = arr1.famPop();`

expect arr1 = [1, 2, 3, 4]

expect arr2.arr = [1, 2, 3]

expect arr2.items = [4]

`const arr1 = [1, 2, 3, 4];`

`const arr2 = arr1.famPop(2);`

expect arr1 = [1, 2, 3, 4]

expect arr2.arr = [1, 2]

expect arr2.items = [3, 4]

### Array.prototype.famPush(element);

Works the same way as Array.prototype.push, but returns a new array with the items added to the end, leaving the source array untouched.

#### Example

`const arr1 = [1, 2, 3, 4];`
`const arr2 = arr1.famPush(5, 6, 7, 8);`
`const arr3 = arr1.famPush([5, 6, 7, 8]);`

expect arr1 = [1, 2, 3, 4]

expect arr2 = [1, 2, 3, 4, 5, 6, 7 ,8]

expect arr3 = [1, 2, 3, 4, 5, 6, 7, 8]

### Array.prototype.famShift(numberToShift = 1);

Works the same way as Array.prototype.shift(), but returns a new array, as well as the shifted item, leaving the source array untouched.

Accepts number of items as an argument. Defaults to 1 if none provided.

These are accessible via the "arr" and "item" properties.

#### Example

`const arr1 = [1, 2, 3, 4];`
`const arr2 = arr1.famShift();`

expect arr1 = [1, 2, 3, 4]

expect arr2.arr = [2, 3, 4]

expect arr2.item = 1

### Array.prototype.famSort(sortFunction);

Works the same way as Array.prototype.sort, but returns a new array, sorted according to the sort function, leaving the source array untouched.

#### Example

`const arr1 = [4, 2, 5, 1];`

`const arr2 = arr1.famSort((a, b) => { return a - b });`

expect arr1 = [4, 2, 5, 1]

expect arr2 = [1, 2, 4, 5]

### Array.prototype.famSplice(startIndex, deleteCount, itemsToSpliceIn);

Works the same way as Array.prototype.splice; you can pass in itemsToSpliceIn as either individual arguments, or as an array. The source array remains untouched.

#### Example

`const arr1 = ["Jan", "Feb", "March", "April", "June"];`

`const arr2 = arr1.famSplice(4, 1, "May");`

expect arr1 = ["Jan", "Feb", "March", "April", "June"]

expect arr2 = ["Jan", "Feb", "March", "April", "May", "June"]

### Array.prototype.famUnshift(itemsToAdd);

Works like Array.prototype.unshift. The items are added to the front of the array in the same way they are passed in as arguments. Source array remains untouched.

#### Example

`const arr1 = [1, 2, 3, 4];`

`const arr2 = arr1.famUnshift(5, 6, 7);`

`const arr3 = arr1.famUnshift([5, 6, 7]);`

expect arr1 = [1, 2, 3, 4]

expect arr2 = [5, 6, 7, 1, 2, 3, 4]

expect arr3 = [5, 6, 7, 1, 2, 3, 4]

## Installation

To install, run

npm install --save @mcgraths7/famjs

OR

yarn add @mcgraths7/famjs

## Usage

Simply require the file at the top of any file which you need to use these in

require('@mcgraths7/famjs');
