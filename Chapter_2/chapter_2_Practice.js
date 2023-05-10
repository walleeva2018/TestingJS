let a = 3 * 3;
console.log(a);

/*
Binding names can be any word. Digits can be part of binding names—catch22 is a valid name,
for example—but the name must not start with a digit.
A binding name may include dollar signs ($) or underscores (_) but no other punctuation or special characters.
*/

let ass2 = "Rafi";
console.log(ass2);

// won't show anything
// let $aa="Rafo";
// console.log(aa);

// return value of function
console.log(Math.min(2, 4) + 100);

// try it out to check if the input is possible . It wont work as you are running in it non browser side
/*let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);*/

//using IF in Js

let theNumber = 29;
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " + theNumber * theNumber);
}

// more about if else
let num = 19;

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// using loop

let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}

// using more loop

let result = 1,
  cnt = 0;
while (cnt < 10) {
  result = result * 2;
  cnt = cnt + 1;
}
console.log(result);

// wow js can do Do-while loop as well

let myName = "Appscode",   // naming convention obtained 
  l = 1;
do {
  console.log(myName);
  l = l + 1;
} while (l <= 10);


// yeah for loop

for(let i=0;i<10;i++)
{
    console.log(i);
    if(i==2)
    {
        break;
    }
}
