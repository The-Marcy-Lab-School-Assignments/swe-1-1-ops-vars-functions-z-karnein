

// Basic Variable & Expression Functions
// Basic Variable & Expression Functions
 
const calculateArea = (width, height) => {
  // TODO: Calculate and return the area of a rectangle
  const area = width * height
  return area; 
};
// console.log(calculateArea(5, 3))
// // 15
// console.log(calculateArea(10, 7))
// // 70

const isEven = (number) => {
  // TODO: Return true if the number is even, false if odd
  if (number % 2 === 0){
    return true
  }else if (number % 2 !== 0){
    return false
  };
};

// console.log( isEven(2))// true
// console.log(isEven(3))// false
// console.log(isEven(0))// true






const convertToFahrenheit = (celsius) => {
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
  return (celsius * 9/5) + 32
};
// console.log( convertToFahrenheit(0))// 32
// console.log(convertToFahrenheit(100)) // 212
// console.log(convertToFahrenheit(37)) //98.6




// String & Variable Functions
const createGreeting = (name) => {
  // TODO: Return a greeting string like "Hello, [name]!"
  const greeting = `Hello ${name}`
  return greeting;
};


//  console.log(createGreeting('Alice'))   // "Hello, Alice!"

//   console.log(createGreeting('Bob'))// "Hello, Bob!"


const getInitials = (firstName, lastName) => {
  // TODO: Return initials by taking first letter of each name
   return firstName[0] + lastName[0];


};

//  console.log( getInitials('John', 'Doe')) // "JD"

// console.log(getInitials('Mary', 'Jane'))// "MJ"


const formatPrice = (price) => {
  // TODO: Return price formatted as "$[price].00" (e.g., "$5.00")
 
  return `${price}.00`;
};

// console.log(formatPrice(5))// "$5.00"

// console.log(formatPrice(10))// "$10.00"


// Function Logic Functions

const getLarger = (num1, num2) => {
 // TODO: Return the larger of the two numbers
 if (num1 > num2){
   return num1
 } else if (num2 > num1){
   return num2
 }else if (num1 === num2 ){
   return `both number One ${num1} and number Two ${num2} are equal`
 }
};

// console.log(getLarger(5, 3))// 5

// console.log(getLarger(3, 5))// 5

// console.log(getLarger(10, 10))// 10



const isValidAge = (age) => {
 // TODO: Return true if age is between 0 and 120, false otherwise
 if (age <= 120 && age >= 0){
   return true
 }else {
   return false
 }
};

// console.log(isValidAge(25))// true

// console.log(isValidAge(0))// true

// console.log(isValidAge(120))// true

// console.log(isValidAge(-1))

// console.log(isValidAge(121))// false


module.exports = {

 calculateArea,
 isEven,
 convertToFahrenheit,
 createGreeting,
 getInitials,
 formatPrice,
 getLarger,
 isValidAge,
};



  

