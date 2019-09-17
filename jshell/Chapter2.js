/**
 * Example of using aggregrate array oprations to make deep copies of arrays
 *  ~ Could be used in situations where you have to copy items, objects, etc. 
 */

function copy(arr1, arr2) {
    for (var i=0; i < arr1.length; ++i) {
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
     print ("Found " + name + "at position" + position); 
 } else {
     print(name + " not found in array")
 }

 /**
  * Example of using the splice() function to add and remove elements 
  * from the middle of an array
  */

  var nums = [1,2,3,4,5]; 
  var newElements = [6,7,8,];
  nums.splice(3,0,newElements); // => splice() requires a starting index, number of elements to remove, and the elements to add
  print(nums); 

  