const calculateArea = (width, height) => {
  // TODO: Calculate and return the area of a rectangle
  const area = width * height
  console.log(area)
};

const isEven = (number) => {
  // TODO: Return true if the number is even, false if odd
  if (number % 2 === 0){
    console.log(true)
  }else if (number % 2 !== 0){
    console.log(false);
  };
};

const convertToFahrenheit = (celsius) => {
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
  console.log((celsius * 9/5) + 32)
};

// String & Variable Functions
const createGreeting = (name) => {
  // TODO: Return a greeting string like "Hello, [name]!"
  const greeting = `Hello ${name}`
  console.log(greeting)
};

const getInitials = (firstName, lastName) => {
  // TODO: Return initials by taking first letter of each name
   console.log(firstName[0] + lastName[0]);


};

const formatPrice = (price) => {
  // TODO: Return price formatted as "$[price].00" (e.g., "$5.00")
 
  console.log(`${price}.00`);
};

// Function Logic Functions

const getLarger = (num1, num2) => {
 // TODO: Return the larger of the two numbers
 if (num1 > num2){
   console.log(num1)
 } else if (num2 > num1){
   console.log(num2)
 }else if (num1 === num2 ){
   console.log(`both number One ${num1} and number Two ${num2} are equal`)
 }
};



const isValidAge = (age) => {
 // TODO: Return true if age is between 0 and 120, false otherwise
 if (age <= 120 && age >= 0){
   console.log(true)
 }else {
   console.log(false)
 }
};



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


