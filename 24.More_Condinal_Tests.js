// Tests for equality and inequality with strings
var fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit == 'orange'? I predict False.");
console.log(fruit == 'orange');
// Tests using the lower case function
var city = 'New York';
console.log("Is city.toLowerCase() == 'new york'? I predict True.");
console.log(city.toLowerCase() == 'new york');
console.log("Is city.toLowerCase() == 'los angeles'? I predict False.");
console.log(city.toLowerCase() == 'los angeles');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var x = 5;
var y = 10;
console.log("Is x == 5? I predict True.");
console.log(x == 5);
console.log("Is y != 10? I predict False.");
console.log(y != 10);
console.log("Is x > 3? I predict True.");
console.log(x > 3);
console.log("Is y < 20? I predict True.");
console.log(y < 20);
console.log("Is x >= 5? I predict True.");
console.log(x >= 5);
console.log("Is y <= 10? I predict True.");
console.log(y <= 10);
// Tests using "and" and "or" operators
var age = 25;
var isAdult = age >= 18;
var hasLicense = true;
console.log("Is isAdult && hasLicense? I predict True.");
console.log(isAdult && hasLicense);
console.log("Is isAdult || hasLicense? I predict True.");
console.log(isAdult || hasLicense);
// Test whether an item is in an array
var colors = ['red', 'green', 'blue'];
console.log("Is 'green' in colors? I predict True.");
console.log(colors.includes('green'));
// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict True.");
console.log(!colors.includes('yellow'));
