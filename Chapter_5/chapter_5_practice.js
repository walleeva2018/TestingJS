// wow magical abstraction

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);

// more magic
let labels = [];
repeat(5, (i) => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);

// mind benging function
function unless(test, then) {
  if (!test) then();
}

repeat(3, (n) => {
  unless(n % 2 == 1, () => {
    console.log(n, "is even");
  });
});

// lets learn filter

obj = [
  {
    name: "Bangla",
    direction: "ltr",
    ranges: [
      [994, 1008],
      [11392, 11508],
      [11513, 11520],
    ],
    year: -200,
    living: false,
  },
  {
    name: "Arabic",
    direction: "rtl",
    ranges: [
      [9924, 10118],
      [192, 1111],
      [11, 115],
    ],
    year: -2,
    living: true,
  },
  {
    name: "Monholian",
    direction: "rlt",
    ranges: [
      [99422, 1222008],
      [112392, 1122508],
      [112513, 1221520],
    ],
    year: -111,
    living: false,
  },
  {
    name: "English",
    direction: "ltr",
    ranges: [
      [994222, 12222008],
      [113222292, 1122222508],
      [11522213, 115222220],
    ],
    year: -2000,
    living: true,
  },
  {
    name: "Indian",
    direction: "ltr",
    ranges: [
      [992224, 10222208],
      [11222392, 115022228],
      [11522213, 1152222220],
    ],
    direction: "ltr",
    year: -20,
    living: true,
  },
];

console.log(obj.filter((s) => s.direction == "ltr"));

function map(array, transform) {
  let mapped = [];
  for (let element of array) {
    mapped.push(transform(element));
  }
  return mapped;
}

let ltrScripts = obj.filter((s) => s.direction == "ltr");
console.log(map(ltrScripts, (s) => s.name));

function test(a) {
  if (a.direction == "ltr") return true;
  return false;
}
console.log(obj);

// more confusion with reduce

function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}
console.log(reduce([1, 2, 3, 4], (a, b) => a * b, 1));
console.log([1, 2, 3, 4].reduce((a, b) => a + b));

function average(array) {
  return array.reduce((a, b) => a + b) / array.length;
}

console.log(obj.filter((s) => s.living).map((s) => s.year));
// → 1165
console.log(obj.filter((s) => !s.living).map((s) => s.year));
// → 204

// Two emoji characters, horse and shoe
let horseShoe = "🐴👟";
console.log(horseShoe.length);
// → 4
console.log(horseShoe[0]);
// → (Invalid half-character)
console.log(horseShoe.charCodeAt(0));
// → 55357 (Code of the half-character)
console.log(horseShoe.codePointAt(0));
// → 128052 (Actual code for horse emoji)

let roseDragon = "🌹🐉";
for (let char of roseDragon) {
  console.log(char);
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    console.log(item);
    let name = groupName(item);
    console.log(name);
    let known = counts.findIndex((c) => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]


// still mind benging things 
