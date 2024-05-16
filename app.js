const n1 = 28;
const n2 = 12;
const n3 = 7;
const n4 = 3;
//these numbers sholud add up to 50//
//const isSum50 = (n1 + n2 + n3 + n4) ==50
//console.log(isSum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
//const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
//console.log(isTwoOdd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 >25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
//const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
//const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
//console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
//const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
//  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
//  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
//  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

// Create Constants
const distance = 1500; // miles
const fuelEfficiencies = {
  55: 30, 
  60: 28,
  75: 23
};
const fuelCostPerGallon = 3; // dollars
const fuelBudget = 175; // dollars

// Function to calculate fuel needed for a given speed
function calculateFuel(speed) {
  const efficiency = fuelEfficiencies[speed];
  return distance / efficiency;
}

// Function to calculate cost of fuel for a given speed
function calculateFuelCost(speed) {
  const fuelNeeded = calculateFuel(speed);
  return fuelNeeded * fuelCostPerGallon;
}

// Function to calculate trip duration for a given speed
function calculateTripDuration(speed) {
  return distance / speed;
}

// Calculate fuel needed for each speed
const fuelNeeded55 = calculateFuel(55);
const fuelNeeded60 = calculateFuel(60);
const fuelNeeded75 = calculateFuel(75);

// Calculate total fuel needed
const totalFuelNeeded = fuelNeeded55 + fuelNeeded60 + fuelNeeded75;

// Calculate total cost of fuel
const totalFuelCost = calculateFuelCost(55) + calculateFuelCost(60) + calculateFuelCost(75);

// Check if the budget is enough to cover the fuel expense
const budgetEnough = totalFuelCost <= fuelBudget;

// Calculate trip duration for each speed
const tripDuration55 = calculateTripDuration(55);
const tripDuration60 = calculateTripDuration(60);
const tripDuration75 = calculateTripDuration(75);

// Output results
console.log("Total gallons of fuel needed:", totalFuelNeeded.toFixed(2));
console.log("Will the budget cover the fuel expense?", budgetEnough ? "Yes" : "No");
console.log("Trip duration at 55 mph:", tripDuration55.toFixed(2), "hours");
console.log("Trip duration at 60 mph:", tripDuration60.toFixed(2), "hours");
console.log("Trip duration at 75 mph:", tripDuration75.toFixed(2), "hours");
