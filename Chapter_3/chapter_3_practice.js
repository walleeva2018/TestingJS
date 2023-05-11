// wohooo function

const square = function(x) {
  return x * x;
};
console.log(square(12));

// calling function without parameter 

const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();

// calling function with parameter 

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));

// Scoping 
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
}
console.log(x + z);


// see the control flow 
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");


// starting a infinite loop
/* 
function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
console.log(chicken() + " came first.");

*/
// → ??

// magic of JS arguements

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}

console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

// console.log has the power

console.log("C","O",2);


// finally recursion 
function po(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * po(base, exponent - 1);
  }
}

console.log(po(2, 3));
// → 8


// let understand recursion 
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));

// lets check function 
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  console.log(cowString);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);