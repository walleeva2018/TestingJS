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