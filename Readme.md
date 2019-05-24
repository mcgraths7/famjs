# FAM -> Functional Array Methods

This library is designed for people who are interested in functional programming, but find that some array methods don't follow the principals.

The following methods are available:

## Array.prototype.famFill(value, startIndex, endIndex);

Works the same way as Array.prototype.fill, but creates and returns a new array under the hood.

## Array.prototype.famPop();

Rather than just returning the popped item, famPop returns an object which contains the new array, and the popped item.

These are accessible via "arr" and "item" properties

## Array.prototype.famPush(element);

Rather than just returning the length of the new array, famPush creates a new array under the hood, and returns the new array with the pushed item on the end.

## Array.prototype.famShift();

Rather than just return the shifted item, famShift returns an object containing both the new array, as well as the shifted item.

These are accessible via the "arr" and "item" properties.

## Array.prototype.famSort(sortFunction);

Works the same way as Array.prototype.sort, but instead creates a new array under the hood which gets sorted according to the sort function and returned.

## Array.prototype.famSplice(startIndex, deleteCount, itemsToSpliceIn);

Works the same way as Array.prototype.splice; you can pass in itemsToSpliceIn as either individual arguments, or as an array.

## Array.prototype.famUnshift(itemsToAdd);

Works like Array.prototype.unshift. The items are added to the front of the array in the same way they are passed in as arguments