// ! objects
// Object is used to represent a real world entity in program
// Object in js is the collection of key and value pairs
// Key and value pair is called as property

// ! Creating an Object
// 1. by using literal {}
// let obj = {};
// console.log(typeof obj); // object
// console.log(typeof []); // object
// console.log(typeof null); // object

// let arr = [];
// console.log(Array.isArray(arr));

// ! Object with properties
// let person = {
//   name: "ABC",
//   age: 50,
//   edu: "B.Tech",
//   isWorking: true,
//   hasKids: null,
//   isMarried: undefined,
//   skills: ["html", "css", "js"],
//   7: "thala",
//   name: "EFG",
//   age: 80,
// };
// ! accessing the properties of an object
// ! DOT Notation -> objName.property
// console.log(person.age);
// console.log(person.name);
// console.log(person.7);

// ! Bracket Notation -> objName['property']
// console.log(person["age"]);
// console.log(person["7"]);

// ! Updating the property
// person.isWorking = false;
// person["name"] = "Shubham";
// console.log(person);

// ! Deleting a property
// delete person.hasKids;
// console.log(person);

//! method
// a function inside an object is called as a method
// let obj = {
//   name: "Atul",
//   age: 30,
//   // first way to declare a method -> in key and value pair
//   details: function() {
//     console.log("This is details method ");
//   },
//   // second way
//   demo() {
//     console.log("This is demo");
//   },
// };
// obj.details();
// obj.demo();
// obj['details']()

// let p1 = {
//   pname: "rohit",
//   team: "MI",
//   age: 45,
//   details: function () {
//     console.log(`The name is ${p1.pname}`);
//   },
// };
// console.log(p1);
// p1.details();

//! this keyword
// this keyowrd is a reference variable , it reference to the object which is currently executing the method
// this keyword behaves differently in different context
// console.log(this); // globally -> (window)global object
// var a = 30;
// function fun() {
//   console.log("Inside the function");
//   console.log(this); // window
// }
// window.fun();
// console.log(this);

// let obj = {
//   p1: "ABC",
//   p2: true,
//   demo: function () {
//     console.log(this); // refrences to obj
//   },
//   demo1: () => {
//     console.log(this); // arrow function doesn't have there own this keyword so they will borrow from outer environment
//   },
//   temp: function () {
//     let b1 = () => {
//       console.log(this); // obj
//     };
//     b1();
//   },
//   outer: function () {
//     return function () {
//       console.log(this);
//     };
//   },
// };
// obj.demo();
// obj.demo1();
// obj.temp();
// let a1 = obj.outer()
// a1()
// let name = "abc";
// let person = {
//   name: "hritik",
//   age: 40,
//   details: function () {
//     console.log(this.name);
//   },
// };
// person.details();

// ! call apply bind
// call apply and bind are the methods which are used to change the reference of this keyword to the object of our choice
// ! difference b/w call apply and bind
// call apply bind are having same functionality , syntactically they are different
// ! call(objRef , arg1 , arg2 , argn)
// call will execute the function immediately setting this keyword to the object which is passed as the argument , and we can pass arguments to the function seperated by comma
// ! apply(objRef , [arg1 , arg2 , argn])
// apply will execute the function immediately setting this keyword to the object which is passed as the argument , and we can pass arguments to the function in the form of an array
// ! bind(objRef , arg1 , arg2 , argn)
// bind will return a new function  setting this keyword to the object which is passed as the argument , and we can pass arguments to the function seperated by comma
// function fun(p) {
//   console.log(this);
//   console.log(p);
// }
// let p1 = {
//   name: "abc",
//   degree: "B.Tech",
// };
// let p2 = {
//   name: "def",
//   degree: "B.Tech",
// };
// fun();
// fun.call(p1, 10);
// fun.call(p2, 20);
// fun.apply(p2, [30]);
// let r1 = fun.bind(p1);
// r1(10);
// r1(20);
// r1(30);

// ! Object methods
let p1 = {
  name: "abc",
  degree: "B.Tech",
};
//! Object.keys(objRef)
// it will return the array of all the keys from an object
console.log(Object.keys(p1));

//! Object.values(objRef)
// it will return the array of all the values from an object
console.log(Object.values(p1));

// ! Object.entries()
// it will return the nested array of all the key and value pairs
console.log(Object.entries(p1));

// ! Object.seal()
// seal will seal the object , the operations like adding a new property and deleting a property will not be allowed
// we can only update the existing properties
// or
// object.seal() restrict to delete or add a new property , we can only update the existing properties
Object.seal(p1);
p1.name = "pranav"; // possible
p1.city = "Delhi"; // not possible
delete p1.degree; // not possible
console.log(p1);

// ! Object.isSealed(objref)
// it will return true if the object is sealed
console.log(Object.isSealed(p1)); // true

// ! Object.freeze()
// it will freeze the object  , after that we cannot add a property we cannot delete as well as we cannot modify
let p2 = {
  name: "def",
  degree: "B.Tech",
};
Object.freeze(p2);
p2.name = "vishal";
delete p2.degree;
p2.place = "Punjab";
console.log(p2);

// ! Object.isFrozen(objref)
// it will return true if the object is frozen
console.log(Object.isFrozen(p2)); // true

//! https://codeshare.io/ad4kPZ

// ! Object questions
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    rating: 4.3,
    stock: 120,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    rating: 4.6,
    stock: 80,
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 89.99,
    rating: 4.7,
    stock: 60,
  },
  {
    id: 4,
    name: "Laptop Stand",
    category: "Accessories",
    price: 34.5,
    rating: 4.2,
    stock: 200,
  },
  {
    id: 5,
    name: "USB-C Charger",
    category: "Electronics",
    price: 19.99,
    rating: 4.5,
    stock: 150,
  },
  {
    id: 6,
    name: "Smartphone",
    category: "Electronics",
    price: 699.99,
    rating: 4.8,
    stock: 45,
  },
  {
    id: 7,
    name: "Tablet",
    category: "Electronics",
    price: 329.99,
    rating: 4.4,
    stock: 70,
  },
  {
    id: 8,
    name: "Office Chair",
    category: "Furniture",
    price: 129.99,
    rating: 4.1,
    stock: 30,
  },
  {
    id: 9,
    name: "Desk Lamp",
    category: "Home Decor",
    price: 22.49,
    rating: 4.0,
    stock: 95,
  },
  {
    id: 10,
    name: "Mechanical Pencil",
    category: "Stationery",
    price: 3.49,
    rating: 4.2,
    stock: 300,
  },
  {
    id: 11,
    name: "Notebook",
    category: "Stationery",
    price: 5.99,
    rating: 4.5,
    stock: 500,
  },
  {
    id: 12,
    name: "Coffee Mug",
    category: "Kitchen",
    price: 12.99,
    rating: 4.6,
    stock: 140,
  },
  {
    id: 13,
    name: "Water Bottle",
    category: "Sports",
    price: 15.99,
    rating: 4.7,
    stock: 200,
  },
  {
    id: 14,
    name: "Yoga Mat",
    category: "Sports",
    price: 29.99,
    rating: 4.4,
    stock: 85,
  },
  {
    id: 15,
    name: "Backpack",
    category: "Accessories",
    price: 49.99,
    rating: 4.5,
    stock: 110,
  },
  {
    id: 16,
    name: "Sunglasses",
    category: "Accessories",
    price: 79.99,
    rating: 4.3,
    stock: 55,
  },
  {
    id: 17,
    name: "Running Shoes",
    category: "Footwear",
    price: 99.99,
    rating: 4.7,
    stock: 65,
  },
  {
    id: 18,
    name: "Sneakers",
    category: "Footwear",
    price: 89.49,
    rating: 4.6,
    stock: 75,
  },
  {
    id: 19,
    name: "Winter Jacket",
    category: "Clothing",
    price: 149.99,
    rating: 4.8,
    stock: 40,
  },
  {
    id: 20,
    name: "T-Shirt",
    category: "Clothing",
    price: 19.99,
    rating: 4.3,
    stock: 0,
  },
  {
    id: 21,
    name: "Jeans",
    category: "Clothing",
    price: 49.99,
    rating: 4.5,
    stock: 180,
  },
  {
    id: 22,
    name: "Cookware Set",
    category: "Kitchen",
    price: 129.99,
    rating: 4.6,
    stock: 0,
  },
  {
    id: 23,
    name: "Air Fryer",
    category: "Appliances",
    price: 89.99,
    rating: 4.7,
    stock: 50,
  },
  {
    id: 24,
    name: "Smartwatch",
    category: "Electronics",
    price: 199.99,
    rating: 4.6,
    stock: 65,
  },
  {
    id: 25,
    name: "Electric Kettle",
    category: "Appliances",
    price: 39.99,
    rating: 4.4,
    stock: 90,
  },
];

//! 🔹 Filter (Basic Selection)

// Get all products that cost less than $50.
let lesstThan50 = products.filter((el) => {
  return el.price < 50;
});
console.log(lesstThan50);

// Find all products in the "Electronics" category.
let ele = products.filter((el) => {
  return el.category == "Electronics";
});
console.log(ele);

// Get all products that have a rating above 4.5.
let above4 = products.filter((el) => {
  return el.rating > 4.5;
});
console.log(above4);

// Find all products that are out of stock (stock === 0).
let outOfStock = products.filter((el) => {
  return el.stock == 0;
});
console.log(outOfStock);

// Get all products whose price is between $20 and $100.
let twentyTo100 = products.filter((el) => {
  return el.price > 20 && el.price < 100;
});
console.log(twentyTo100);

//! 🔹 Map (Transformation)

// Create an array of product names only.
let pnames = products.map((el) => {
  return el.name;
});
console.log(pnames);

// Create an array of objects containing only name and price.
let n_p = products.map((el) => {
  return { name: el.name, price: el.price };
});
console.log(n_p);

// Create a new array with strings like "ProductName — $Price".
let p_p = products.map((el) => {
  return `${el.name} - $${el.price}`;
});
console.log(p_p);

// Convert all product names to uppercase and return them.
let upnames = products.map((el) => {
  return el.name.toUpperCase();
});
console.log(upnames);

// Create a new array that adds a field discountPrice = price * 0.9 (10% off).
let discounted = products.map((el) => {
  return { ...el, discountPrice: el.price * 0.9 };
});
console.log(discounted);

//! 🔹 Sort (Ordering)

// Sort all products by price (ascending).
// products.sort((a, b) => {
//   return a.price - b.price;
// });
// console.log(products);

// Sort all products by rating (descending).
products.sort((a, b) => {
  return b.price - a.price;
});
console.log(products);

// Sort all products alphabetically by name.
let sortedNames = products.sort((a, b) => {
  /*  console.log(a.name.charCodeAt(0) - b.name.charCodeAt(0));
  return a.name.charCodeAt(0) - b.name.charCodeAt(0); */
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});
console.log(sortedNames);

// Sort products by category, and then by price within each category.
let sort_p_c = products.sort((a, b) => {
  if (a.category > b.category) {
    return 1;
  } else if (a.category < b.category) {
    return -1;
  } else {
    return a.price-b.price;
  }
});
console.log(sort_p_c);

// Get the top 3 most expensive products.


//! 🔹 Reduce (Aggregation)

// Calculate the total stock of all products.

// Find the total value of inventory (price * stock).

// Calculate the average price of all products.

// Count how many products belong to each category.

// Find the highest product price using reduce.

//! 🔹 Find & Combined Logic (Advanced)

// Find the most expensive product in the array.

// Find the product with the highest stock value (price * stock).

// Get all products that have rating > 4.5 and price > $100, and return only their names.

// Find the average rating of all products in the "Appliances" category.

// Get a list of unique categories from the product array (no duplicates).
