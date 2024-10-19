//using concat()
let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let joinedArray = arr1.concat(arr2);
console.log("Joined Array:", joinedArray);

//using push()
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits with Kiwi:", fruits);

//using unshift()
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 with added elements:", array1);

//using pop()
fruits.pop();
console.log("Fruits without the last element:", fruits);

//using shift()
let array2 = [1, 2, 3];
array2.shift();
console.log("Array2 without the first element:", array2);

//using sort()
fruits.sort();
console.log("Sorted Fruits:", fruits);

//using slice()
let slicedFruits = fruits.slice(1, 3); 
console.log("Sliced Fruits:", slicedFruits);

//using splice()
let months = ["January", "March", "April"];
months.splice(1, 0, "February"); 
months.splice(2, 2, "May", "June");
console.log("Months array after splice:", months);