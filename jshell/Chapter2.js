/**
 * Example of using aggregrate array oprations to make deep copies of arrays
 *  ~ Could be used in situations where you have to copy items, objects, etc.
 */

function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; ++i) {
    arr2[i] = arr1[i];
  }
}

/**
 * Example of searching for a value using accessor functions
 *  ~ Could be used in situations where the index of the key value pair
 *    is necessary for a computational search
 */

var names = ["Joe", "Bob", "Rick", "Jen", "Jill", "Carol"];
putstr("Enter a name to search for: ");
var name = readLine();
var position = names.indexOf(name);

if (position >= 0) {
  print("Found " + name + "at position" + position);
} else {
  print(name + " not found in array");
}

/**
 * Example of using the splice() function to add and remove elements
 * from the middle of an array
 */

var nums = [1, 2, 3, 4, 5];
var newElements = [6, 7, 8];
nums.splice(3, 0, newElements); // => splice() requires a starting index, number of elements to remove, and the elements to add
print(nums);

/**
 * Example of using a compare function to sort numbers in order
 *    ~ Could be used for sorting strings alphabetically and number rankings
 */

function compare(num1, num2) {
  return num1 - num2;
}

var nums = [3, 1, 2, 100, 4, 200];
nums.sort(compare);
print(nums);

/**
 * Example of using the every() and forEach() function on an array
 *   ~ Could be used for determining prime numbers
 */

 //forEach() function example
 function square(num) {
     print(num, num * num); 
 }

 var nums = [1,2,3,4,5,6,7,8,9,10];
 nums.forEach(square);


 //every() function example 
 function isEven(num) {
     return num % 2 == 0;
 }

 var nums = [2,4,6,8,10];
 var even = nums.every(isEven);
 if (even) {
     print("All numebrs are even")
 } else {
     print("Not all numbers are even")
 }; 
 

 /**
  * Example of the reduce() function when used to add values in an array 
  *     ~ Very important and is used in a lot of various use case scenarios 
  */

