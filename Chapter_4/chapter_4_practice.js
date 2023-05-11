console.log("Hello");

// lets print array in JS 
let arr=[1,2,3,4,5];
for(let i=0;i<5;i++)
{
    console.log(i);
}

// method 
let doh = "Doh";
console.log(typeof(doh));
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH


// story of my life
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
  };
  console.log(day1.squirrel);
  // → false
  console.log(day1.wolf);
  // → undefined
  day1.wolf = false;
  console.log(day1.wolf);
  // → false

  Object.assign(day1,{database: "MariaDb"});
console.log(day1);

// strings magic
let appscode="Appscode is a good company";
console.log(appscode.split(" "));

// array magic 
let words=["never", "fully"];
console.log(["will",...words,"understand"]);