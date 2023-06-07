let fruits = ['mangoes','kiwi' , 'passion'];
let vegetables = ['kales', 'sukumawili']
console.log(fruits.length);


fruits.push('citrus');
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.toString());

console.log(fruits.join(' $ '));

fruits.shift();

console.log(fruits);

//adds a new element to ht beginning od the array
fruits.unshift('bananas');
console.log(fruits);

// deletes the element in the specified podition
delete fruits[2];
console.log(fruits);

//sums up the two arrays to a new array
var all = fruits.concat(vegetables);
console.log(all);


var two_D = [[1,2], [3,4], [5,6]];

console.log(two_D.flat()); //creates a new normal(1D array)

console.log(two_D);



//splice - adds new elements
fruits.splice(2,0,'cola', 'watermelon');
console.log(fruits);