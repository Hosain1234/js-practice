// variable
var bottleColor = 'Yellow';
var waterQuantity = 1;
var bottleIsFull = false;

// array
var items = ['potato', 'brenjal', 'carrot', 'tomato', 'pumpkin'];
var numberSet = [1, 3, 5, 6, 89, 43, 98];
var potatoPosition = items.indexOf('potato');
// console.log(potatoPosition);
items.push(23);
// console.log(items);

// ".unshift()" is used for adding item in the begining of an array and ".shift()" is used to remove any item from the begining of an array. ".push()" is used for adding item in the last and ".pop()" is used to remove item from the last of an array.
items.unshift('banana', 29);
// console.log(items);
items.pop();
items.shift();
items.shift();
items.pop();
console.log(items);
