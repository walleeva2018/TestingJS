let re1 = new RegExp("abc");
let re2 = /abc/;
let eighteenPlus = /eighteen\+/;

console.log(re1);
console.log(re2);
console.log(eighteenPlus);

console.log(/abc/.test("abcde"));
// → true
console.log(/abc/.test("abxde"));
// → false


let notBinary = /[^01]/;
console.log(notBinary.test("1100100010100110"));
// → false
console.log(notBinary.test("1100100010200110"));
// → true

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));
// → ["'hello'", "hello"]

console.log(new Date());

// this is sooo cool 
console.log(new Date(2013,11,19).getTime());



// excellent regexp 
let animalCount = /\b\d+ (pig|cow|chicken)s?\b/;
console.log(animalCount.test("15 pigs"));
// → true
console.log(animalCount.test("15 pigchickens"));
// → false


// replace is too much useful 
console.log("Papa".replace("p","m"));

// Thats like some next level programming 
console.log(
    "Liskov, Barbara\nMcCarthy, John\nWadler, Philip"
      .replace(/(\w+), (\w+)/g, "$2 $1"));
  // → Barbara Liskov
  //   John McCarthy
  //   Philip Wadler


  console.log(/<.>/u.test("<🌹>"));
